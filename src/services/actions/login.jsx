import {
  setCookie,
  deleteCookie,
  getCookie,
  fetchData,
} from "../../utils/utils";
import { API_URL, LOGIN_URL, LOGOUT_URL } from "../../utils/burger-constants";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function login(data) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    fetchData(`${API_URL}${LOGIN_URL}`, "POST", JSON.stringify(data))
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
export function logout() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    if (!getCookie("refreshToken"))
      dispatch({
        type: LOGOUT_SUCCESS,
      });
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
            dispatch({
              type: LOGOUT_SUCCESS,
              data: res,
            });
          } else {
            dispatch({
              type: LOGOUT_FAILED,
            });
          }
        })
        .catch((e) => {
          dispatch({
            type: LOGOUT_FAILED,
          });
        });
  };
}
