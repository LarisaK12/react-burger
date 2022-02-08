import { API_URL, GET_ORDER_ID_URL } from "../../utils/burger-constants";
import { AppThunk, TOrder, TOrderShortDetails } from "../../utils/types";
import { fetchData, fetchWithToken, fetchWithRefresh } from "../../utils/utils";
export const SUBMIT_ORDER_REQUEST:"SUBMIT_ORDER_REQUEST" = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_SUCCESS:"SUBMIT_ORDER_SUCCESS" = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_FAILED:"SUBMIT_ORDER_FAILED" = "SUBMIT_ORDER_FAILED";
export const GET_ORDER_REQUEST:"GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS:"GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED:"GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const RESET_ORDER:"RESET_ORDER" = "RESET_ORDER";
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
export interface IGetOrderRequest{
  readonly type: typeof GET_ORDER_REQUEST
}
export interface IGetOrderResult{
  readonly type: typeof GET_ORDER_SUCCESS | typeof GET_ORDER_FAILED,
  readonly order?:TOrder
}
export type TOrderActions = ISubmitOrderRequest | ISubmitOrderResult | IResetOrder | IGetOrderRequest | IGetOrderResult
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
export const getOrderRequest=():IGetOrderRequest=>{
  return {
    type:GET_ORDER_REQUEST
  }
}
export const getOrderResult=(isSuccess:boolean,order?:TOrder):IGetOrderResult=>{
  return {
    type: isSuccess? GET_ORDER_SUCCESS : GET_ORDER_FAILED,
    order
  }
}
export function submitOrder(data:ReadonlyArray<string>) {
  return function (dispatch:AppThunk) {
    dispatch(submitOrderRequest());
    
    
      fetchWithToken(`${API_URL}${GET_ORDER_ID_URL}`, "POST",JSON.stringify({ ingredients: data }))
       .then((res) => {
        if (res && res.success) {
          dispatch(submitOrderResult(true,{number:res.order.number, _id:res.name}));
        } else {
          dispatch(submitOrderResult(false));
        }
      })
      .catch((e) => {
        if (
          ((e.indexOf("expired") > 0 || e.indexOf("invalid") > 0) &&
            e.indexOf("token") > 0) ||
          e.indexOf("403")
        )
          fetchWithRefresh(`${API_URL}${GET_ORDER_ID_URL}`, "POST",JSON.stringify({ ingredients: data }))
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
        else
        dispatch(submitOrderResult(false));

      }); 
    
      
  };
}
export function getOrder(number:number){
return function (dispatch:AppThunk){
  dispatch(getOrderRequest());
  fetchData(`${API_URL}${GET_ORDER_ID_URL}/${number}`,"GET")
  .then((res)=>{
    if(res && res.success && res.orders.length>0){
      dispatch(getOrderResult(true, res.orders[0]));
    }else{
      dispatch(getOrderResult(false));
    }
  }).catch(e=>{
    
    dispatch(getOrderResult(false));
  }
  )    
}
}
