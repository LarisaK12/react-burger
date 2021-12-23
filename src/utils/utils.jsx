import { API_URL, TOKEN_URL } from "./burger-constants";
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.json()?.message}`);
};
export const fetchData = (url, method, data) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: data,
  }).then(checkResponse);
};
export const fetchWithToken = (url, method, data) => {
  if (!getCookie("accessToken")) return Promise.reject(`Ошибка: токена нет`);
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
export const fetchWithRefresh = (url, method, data) => {
  return refreshToken().then((res) => {
    if (res && res.success) {
      let aToken = res.accessToken.split("Bearer ")[1];
      setCookie("accessToken", aToken, { expires: 1200 });
      setCookie("refreshToken", res.refreshToken);
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
export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}
