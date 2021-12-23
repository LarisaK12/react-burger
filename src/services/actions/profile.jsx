import {
  setCookie,
  getCookie,
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
export const PASS_RESET_REQUEST = "PASS_RESET_REQUEST";
export const PASS_RESET_SUCCESS = "PASS_RESET_SUCCESS";
export const PASS_RESET_FAILED = "PASS_RESET_FAILED";

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

export function register(data) {
  return function (dispatch) {
    dispatch({
      type: REG_USER_REQUEST,
    });
    fetchData(`${API_URL}${REGISTER_URL}`, "POST", JSON.stringify(data))
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

export function getUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    let aToken = getCookie("accessToken");
    if (!aToken) {
      fetchWithRefresh(`${API_URL}${USER_URL}`, "GET")
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
    } else
      fetchWithToken(`${API_URL}${USER_URL}`, "GET")
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

export function setUser(data) {
  return function (dispatch) {
    dispatch({
      type: SET_USER_REQUEST,
    });
    let aToken = getCookie("accessToken");
    if (!aToken) {
      fetchWithRefresh(`${API_URL}${USER_URL}`, "PATCH", data)
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: SET_USER_SUCCESS,
              data: res,
            });
          } else {
            dispatch({
              type: SET_USER_FAILED,
            });
          }
        })
        .catch((e) => {
          dispatch({
            type: SET_USER_FAILED,
          });
        });
    } else
      fetchWithToken(`${API_URL}${USER_URL}`, "PATCH", data)
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: SET_USER_SUCCESS,
              data: res,
            });
          } else {
            dispatch({
              type: SET_USER_FAILED,
            });
          }
        })
        .catch((e) => {
          dispatch({
            type: SET_USER_FAILED,
          });
        });
  };
}

export function forgotPassword(data) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASS_REQUEST,
    });
    fetchData(`${API_URL}${FORGOT_PASSWORD_URL}`, "POST", JSON.stringify(data))
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: FORGOT_PASS_SUCCESS,
            data: res,
          });
        } else {
          dispatch({
            type: FORGOT_PASS_FAILED,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: FORGOT_PASS_FAILED,
        });
      });
  };
}
export function resetPassword(data) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASS_REQUEST,
    });
    fetchData(`${API_URL}${RESET_PASSWORD_URL}`, "POST", JSON.stringify(data))
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RESET_PASS_SUCCESS,
            data: res,
          });
        } else {
          dispatch({
            type: RESET_PASS_FAILED,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: RESET_PASS_FAILED,
          data: { message: e },
        });
      });
  };
}
