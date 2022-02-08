import { API_URL, TOKEN_URL } from "./burger-constants";
import { TCookieProps } from "./types";
export const checkResponse = (res:Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.json()}`);
};
export const fetchData = (url:string, method:string, data?:string) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: data,
  }).then(checkResponse);
};
export const fetchWithToken = (url:string, method:string, data?:string) => {
 return  getToken().then((res)=>{
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: data,
  }).then(checkResponse)
})

    
};
export const fetchWithRefresh = (url:string, method:string, data?:string) => {
  return refreshToken().then((res) => {
    return fetchWithToken(url, method, data);
  })
  .catch(e=>{
    return Promise.reject(e);
  });
    
};
// запрашивает новый access токен
export const refreshToken = () => {
  if (!getCookie("refreshToken")) {
    return Promise.reject(`Ошибка: токена нет`);}
  else
    return fetch(`${API_URL}${TOKEN_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    }).then(checkResponse);
};
//отдает токен доступа, если его нет, то пытается достать новый (используя refresh токен), если неудчно - удаляет refresh токен
export const getToken =()=>{
  return new Promise<string>((resolve,reject)=>{
  var token = getCookie("accessToken");
  if(!token){
    refreshToken().then((res) => {
      if (res && res.success) {
        let aToken = res.accessToken.split("Bearer ")[1];
        setCookie("accessToken", aToken, { expires: 1200 });
        setCookie("refreshToken", res.refreshToken, {expires:"never"});
        resolve(aToken);
      }
      reject(`Ошибка: ${res.message}`);      
    }      
    ).catch((e)=>{ 
      deleteCookie("refreshToken");
      reject(e);
    })   
    
  }
  else resolve(token);
}
  )
}
export function getCookie(name:string):string|undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
      // eslint-disable-next-line no-useless-escape
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name:string, value:string|null, props?:TCookieProps) {
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

export function dateToString(dtime:Date):string{
  try{
    var dt = new Date(dtime);
    var day = dt.getFullYear()=== new Date().getFullYear() &&
    dt.getMonth()=== new Date().getMonth() ? (dt.getDay() === new Date().getDay()?"сегодня":
     new Date().getDay()-dt.getDay() === 1?"вчера":`${new Date().getDay()-dt.getDay()} дня назад`
    ) :null;
    if(day === null) day=`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDay()}`;
    return `${day}, ${dt.toLocaleTimeString()}`
  
  }catch(e){
    return dtime.toString();
  }
    
}
export const splitArray =(arr:ReadonlyArray<number>, chunkSize:number)=> {
  var R = [];
  for (var i = 0; i < arr.length; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
}
