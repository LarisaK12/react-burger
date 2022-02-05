import { API_URL, GET_ORDER_ID_URL } from "../../utils/burger-constants";
import { AppThunk, TOrderShortDetails } from "../../utils/types";
import { checkResponse, fetchWithToken, getToken } from "../../utils/utils";
export const SUBMIT_ORDER_REQUEST = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_FAILED = "SUBMIT_ORDER_FAILED";
export const RESET_ORDER = "RESET_ORDER";
export interface ISubmitOrderRequest{
  readonly type: typeof SUBMIT_ORDER_REQUEST
}
export interface ISubmitOrderResult{
  readonly type: typeof SUBMIT_ORDER_SUCCESS | typeof SUBMIT_ORDER_FAILED,
  readonly order?:TOrderShortDetails
}
export interface IResetOrder{
  readonly type:typeof RESET_ORDER
}
export type TOrderActions = ISubmitOrderRequest | ISubmitOrderResult | IResetOrder
export const submitOrderRequest=():ISubmitOrderRequest=>{
  return {
    type:SUBMIT_ORDER_REQUEST
  }
}
export const submitOrderResult=(isSuccess:boolean,order?:TOrderShortDetails):ISubmitOrderResult=>{
  return {
    type: isSuccess? SUBMIT_ORDER_SUCCESS : SUBMIT_ORDER_FAILED,
    order
  }
}
export const resetOrder = ():IResetOrder=>{
  return {
    type: RESET_ORDER
  }
}
export function submitOrder(data:ReadonlyArray<string>) {
  return function (dispatch:AppThunk) {
    dispatch(submitOrderRequest());
    let token=getToken();
    if(!token) dispatch(submitOrderResult(false));
    fetchWithToken(`${API_URL}${GET_ORDER_ID_URL}`, "POST",JSON.stringify({ ingredients: data }))
       .then((res) => {
        if (res && res.success) {
          dispatch(submitOrderResult(true,{number:res.order.number, _id:res.name}));
        } else {
          dispatch(submitOrderResult(false));
        }
      })
      .catch((e) => {
        dispatch(submitOrderResult(false));
      });

      
  };
}
