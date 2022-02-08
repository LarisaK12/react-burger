import {
  setCookie,
  deleteCookie,
  getCookie,
  fetchData,
} from "../../utils/utils";
import { API_URL, LOGIN_URL, LOGOUT_URL } from "../../utils/burger-constants";
import {AppThunk, TUser} from "../../utils/types"

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export interface ILoginRequest{
  readonly type: typeof LOGIN_REQUEST,
}
export interface ILoginSuccess{
  readonly type: typeof LOGIN_SUCCESS,
  readonly user:TUser
}
export interface ILoginFailed{
  readonly type: typeof LOGIN_FAILED,
}
export interface ILogoutRequest{
  readonly type: typeof LOGOUT_REQUEST,
}
export interface ILogoutSuccess{
  readonly type: typeof LOGOUT_SUCCESS,
}
export interface ILogoutFailed{
  readonly type: typeof LOGOUT_FAILED,
}
export type TLoginActions = ILoginFailed|ILoginRequest|ILoginSuccess|ILogoutFailed|ILogoutRequest|ILogoutSuccess;
export const loginRequest=():ILoginRequest=>{
  return {
    type:LOGIN_REQUEST
  }
}
export const loginSucccess=(user:TUser):ILoginSuccess=>{
  return {
    type:LOGIN_SUCCESS,
    user
  }
}
export const loginFailed=():ILoginFailed=>{
  return {
    type:LOGIN_FAILED
  }
}
export const logoutRequest=():ILogoutRequest=>{
  return {
    type:LOGOUT_REQUEST
  }
}
export const logoutSucccess=():ILogoutSuccess=>{
  return {
    type:LOGOUT_SUCCESS
  }
}
export const logoutFailed=():ILogoutFailed=>{
  return {
    type:LOGOUT_FAILED
  }
}
export function login(data:TUser) {
  return function (dispatch:AppThunk) {
    dispatch(loginRequest());
    fetchData(`${API_URL}${LOGIN_URL}`, "POST", JSON.stringify(data))
      .then((res) => {
        if (res && res.success) {
          let aToken = res.accessToken.split("Bearer ")[1];
          setCookie("accessToken", aToken, { expires: 1200 });
          setCookie("refreshToken", res.refreshToken);
          dispatch(loginSucccess(res.user));
        } else {
          dispatch(loginFailed());
        }
      })
      .catch((e) => {
        dispatch(loginFailed());
      });
  };
}
export function logout() {
  return function (dispatch:AppThunk) {
    dispatch(logoutRequest());
    if (!getCookie("refreshToken"))
      dispatch(logoutSucccess());
    else
      fetchData(
        `${API_URL}${LOGOUT_URL}`,
        "POST",
        JSON.stringify({ token: getCookie("refreshToken") })
      )
        .then((res) => {
          if (res && res.success) {
            deleteCookie("accessToken");
            deleteCookie("refreshToken");
            dispatch(logoutSucccess());
          } else {
            dispatch(logoutFailed());
          }
        })
        .catch((e) => {
           dispatch(logoutFailed());
        });
  };
}
