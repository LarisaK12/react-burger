import {
  setCookie,
  fetchWithRefresh,
  fetchWithToken,
  fetchData,
} from "../../utils/utils";
import {
  API_URL,
  USER_URL,
  REGISTER_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from "../../utils/burger-constants";
import { AppThunk, TResetPassword, TUser } from "../../utils/types";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILED = "SET_USER_FAILED";

export const REG_USER_REQUEST = "REG_USER_REQUEST";
export const REG_USER_SUCCESS = "REG_USER_SUCCESS";
export const REG_USER_FAILED = "REG_USER_FAILED";
export const CLEAR_USER = "CLEAR_USER";

export const FORGOT_PASS_REQUEST = "FORGOT_PASS_REQUEST";
export const FORGOT_PASS_SUCCESS = "FORGOT_PASS_SUCCESS";
export const FORGOT_PASS_FAILED = "FORGOT_PASS_FAILED";

export const RESET_PASS_REQUEST = "RESET_PASS_REQUEST";
export const RESET_PASS_SUCCESS = "RESET_PASS_SUCCESS";
export const RESET_PASS_FAILED = "RESET_PASS_FAILED";
export interface IResetPassRequest{
  readonly type: typeof RESET_PASS_REQUEST 
}
export interface IResetPassResult{
  readonly type: typeof RESET_PASS_SUCCESS | typeof RESET_PASS_FAILED,
  readonly message?:string 
}
export interface IForgotPassRequest{
  readonly type: typeof FORGOT_PASS_REQUEST 
}
export interface IForgotPassResult{
  readonly type: typeof FORGOT_PASS_FAILED | typeof FORGOT_PASS_SUCCESS,
  readonly message?:string
}
export interface ISetUserRequest{
  readonly type:typeof SET_USER_REQUEST
}
export interface ISetUserResult{
  readonly type:typeof SET_USER_FAILED | typeof SET_USER_SUCCESS,
  readonly user?:TUser
}
export interface IGetUserRequest{
  readonly type:typeof GET_USER_REQUEST
}
export interface IGetUserResult{
  readonly type:typeof GET_USER_FAILED | typeof GET_USER_SUCCESS,
  readonly user?:TUser
}
export interface IRegUserRequest{
  readonly type:typeof REG_USER_REQUEST
}
export interface IRegUserResult{
  readonly type:typeof REG_USER_FAILED | typeof REG_USER_SUCCESS,
  readonly user?:TUser|null
}

export type TProfileActions = IResetPassRequest | IResetPassResult |IForgotPassRequest |IForgotPassResult
|ISetUserRequest | ISetUserResult | IGetUserRequest | IGetUserResult | IRegUserRequest | IRegUserResult
export const resetPassRequest=():IResetPassRequest=>{
  return {
    type:RESET_PASS_REQUEST
  }
}
export const resetPassResult=(isSuccess:boolean, message?:string):IResetPassResult=>{
  return {
    type:isSuccess? RESET_PASS_SUCCESS: RESET_PASS_FAILED,
    message
  }
}
export const forgotPasswordRequest =():IForgotPassRequest=>{
  return{
    type:FORGOT_PASS_REQUEST
  }
}
export const forgotPasswordResult =(isSuccess:boolean, message?:string):IForgotPassResult=>{
  return{
    type: isSuccess? FORGOT_PASS_SUCCESS: FORGOT_PASS_FAILED,
    message
  }
}
export const setUserRequest=():ISetUserRequest=>{
  return {
    type: SET_USER_REQUEST
  }
}
export const setUserResult = (isSuccess:boolean, user?:TUser):ISetUserResult=>{
  return{
    type:  isSuccess? SET_USER_SUCCESS: SET_USER_FAILED,
    user
  }
}
export const getUserRequest=():IGetUserRequest=>{
  return {
    type: GET_USER_REQUEST
  }
}
export const getUserResult = (isSuccess:boolean, user?:TUser):IGetUserResult=>{
  return{
    type:  isSuccess? GET_USER_SUCCESS: GET_USER_FAILED,
    user
  }
}
export const regUserRequest=():IRegUserRequest=>{
  return {
    type: REG_USER_REQUEST
  }
}
export const regUserResult = (isSuccess:boolean, user?:TUser|null):IRegUserResult=>{
  return{
    type:  isSuccess? REG_USER_SUCCESS: REG_USER_FAILED,
    user
  }
}

export function register(data:TUser) {
  return function (dispatch:AppThunk) {
    dispatch(regUserRequest());
    fetchData(`${API_URL}${REGISTER_URL}`, "POST", JSON.stringify(data))
      .then((res) => {
        if (res && res.success) {
          let aToken = res.accessToken.split("Bearer ")[1];
          setCookie("accessToken", aToken, { expires: 1200 });
          setCookie("refreshToken", res.refreshToken);
          dispatch(regUserResult(true,res.user));
        } else {
          dispatch(regUserResult(false));
        }
      })
      .catch((e) => {
        dispatch(regUserResult(false));
      });
  };
}

export function getUser() {
  return function (dispatch:AppThunk) {
    dispatch(getUserRequest());
    
    fetchWithToken(`${API_URL}${USER_URL}`, "GET")
        .then((res) => {
          if (res && res.success) {
            dispatch(getUserResult(true,res.user));
          } else {
            dispatch(getUserResult(false));
            
          }
        })
        .catch((e) => {
          
          if (
            ((e.indexOf("expired") > 0 || e.indexOf("invalid") > 0) &&
              e.indexOf("token") > 0) ||
            e.indexOf("403")
          )
          {
          
            fetchWithRefresh(`${API_URL}${USER_URL}`, "GET")
              .then((res) => {
                if (res && res.success) {
                  dispatch(getUserResult(true,res.user));
                } else {
                  dispatch(getUserResult(false));
                }
              })
              .catch((e) => {
                dispatch(getUserResult(false));
              });
            }
          else{
          dispatch(getUserResult(false));
        
        }
        });
  };
}

export function setUser(data:TUser) {
  return function (dispatch:AppThunk) {
    dispatch(setUserRequest());
    fetchWithToken(`${API_URL}${USER_URL}`, "PATCH", JSON.stringify(data))
        .then((res) => {
          if (res && res.success) {
            dispatch(setUserResult(true, res.user));
          } else {
            dispatch(setUserResult(false));
          }
        })
        .catch((e) => {
          if (
            (e.indexOf("expired") > 0 || e.indexOf("invalid") > 0) &&
            e.indexOf("token") > 0
          )
            fetchWithRefresh(
              `${API_URL}${USER_URL}`,
              "PATCH",
              JSON.stringify(data)
            )
              .then((res) => {
                if (res && res.success) {
                  dispatch(setUserResult(true, res.user));
                } else {
                  dispatch(setUserResult(false));
                }
              })
              .catch((e) => {
                dispatch(setUserResult(false));
              });
          else
            dispatch(setUserResult(false));
        });
  };
}

export function forgotPassword(data:TUser) {
  return function (dispatch:AppThunk) {
    dispatch(forgotPasswordRequest());
    fetchData(`${API_URL}${FORGOT_PASSWORD_URL}`, "POST", JSON.stringify(data))
      .then((res) => {
        if (res && res.success) {
          dispatch(forgotPasswordResult(true,res.message));
        } else {
          dispatch(forgotPasswordResult(false));
        }
      })
      .catch((e) => {
        dispatch(forgotPasswordResult(false));
      });
  };
}
export function resetPassword(data:TResetPassword) {
  return function (dispatch:AppThunk) {
    dispatch(resetPassRequest());
    fetchData(`${API_URL}${RESET_PASSWORD_URL}`, "POST", JSON.stringify(data))
      .then((res) => {
        if (res && res.success) {
          dispatch(resetPassResult(true,res.message));
        } else {
          dispatch(resetPassResult(false));
        }
      })
      .catch((e) => {
        dispatch(resetPassResult(false,e));
      });
  };
}
