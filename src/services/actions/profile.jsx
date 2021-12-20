import {
  checkResponse,
  setCookie,
  deleteCookie,
  getCookie,
} from "../../utils/utils";
import {
  API_URL,
  LOGIN_URL,
  USER_URL,
  REGISTER_URL,
} from "../../utils/burger-constants";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const PASS_RESET_REQUEST = "PASS_RESET_REQUEST";
export const PASS_RESET_SUCCESS = "PASS_RESET_SUCCESS";
export const PASS_RESET_FAILED = "PASS_RESET_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const REG_USER_REQUEST = "REG_USER_REQUEST";
export const REG_USER_SUCCESS = "REG_USER_SUCCESS";
export const REG_USER_FAILED = "REG_USER_FAILED";
export function Register(data) {
  return function (dispatch) {
    dispatch({
      type: REG_USER_REQUEST,
    });
    fetch(`${API_URL}${REGISTER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          let aToken = res.accessToken.split("Bearer ")[1];
          setCookie("accessToken", aToken, { expires: 1200 });
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: REG_USER_SUCCESS,
            data: { ...res },
          });
        } else {
          dispatch({
            type: REG_USER_FAILED,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: REG_USER_FAILED,
        });
      });
  };
}
export function Login(data) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    fetch(`${API_URL}${LOGIN_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          let aToken = res.accessToken.split("Bearer ")[1];
          setCookie("accessToken", aToken, { expires: 1200 });
          setCookie("refreshToken", res.refreshToken);

          dispatch({
            type: LOGIN_SUCCESS,
            data: res,
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
}
export function GetUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    let aToken = getCookie("accessToken");
    fetch(`${API_URL}${USER_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + aToken,
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            data: res,
          });
        } else {
          dispatch({
            type: GET_USER_FAILED,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: GET_USER_FAILED,
        });
      });
  };
}
