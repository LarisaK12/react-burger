import { API_URL, GET_ORDER_ID_URL } from "../../utils/burger-constants";
import { checkResponse } from "../../utils/utils";
export const SUBMIT_ORDER_REQUEST = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_FAILED = "SUBMIT_ORDER_FAILED";
export const RESET_ORDER = "RESET_ORDER";

export function submitOrder(data) {
  return function (dispatch) {
    dispatch({
      type: SUBMIT_ORDER_REQUEST,
    });
    fetch(`${API_URL}${GET_ORDER_ID_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ingredients: data }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: SUBMIT_ORDER_SUCCESS,
            data: res.order.number,
          });
        } else {
          dispatch({
            type: SUBMIT_ORDER_FAILED,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: SUBMIT_ORDER_FAILED,
        });
      });
  };
}
