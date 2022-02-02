import { API_URL, TOKEN_URL } from "./burger-constants";
import { TCookieProps } from "./types";
export const checkResponse = (res:Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.json()}`);
};
export const fetchData = (url:string, method:string, data:string) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: data,
  }).then(checkResponse);
};
export const fetchWithToken = (url:string, method:string, data:string) => {
  if (!getCookie("accessToken")) return Promise.reject(`Ошибка: token invalid`);
  else
    return fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
      body: data,
    }).then(checkResponse);
};
export const fetchWithRefresh = (url:string, method:string, data:string) => {
  return refreshToken().then((res) => {
    if (res && res.success) {
      let aToken = res.accessToken.split("Bearer ")[1];
      setCookie("accessToken", aToken, { expires: 1200 });
      setCookie("refreshToken", res.refreshToken, {expires:"never"});
    }
    return fetchWithToken(url, method, data);
  });
};
export const refreshToken = () => {
  if (!getCookie("refreshToken")) return Promise.reject(`Ошибка: токена нет`);
  else
    return fetch(`${API_URL}${TOKEN_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    }).then(checkResponse);
};
export function getCookie(name:string):string|undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name:string, value:string|null, props:TCookieProps) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if ((exp as Date) && (exp as Date).toUTCString) {
    props.expires = (exp as Date).toUTCString();
  }
  value = value?encodeURIComponent(value as string):'';
  let updatedCookie = name + "=" + value;
  updatedCookie +=";expires="+props.expires;
  
  document.cookie = updatedCookie;
}

export function deleteCookie(name:string) {
  setCookie(name, null, { expires: -1 });
}
