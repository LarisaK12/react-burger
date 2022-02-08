import {
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILED,
  RESET_ORDER,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  TOrderActions,
} from "../actions/order-details";
import {TOrder} from "../../utils/types";
export type TOrderState = {
  orderId: null|undefined|number,
  submitOrderRequest: boolean,
  submitOrderFailed: boolean,
  getOrderRequest:boolean,
  getOrderFailed:boolean,
  order?:TOrder,
};
const initialState:TOrderState = {
  orderId: null,
  submitOrderRequest: false,
  submitOrderFailed: false,
  getOrderRequest:false,
  getOrderFailed:false,
};
export const orderDetailsReducer = (state:TOrderState = initialState, action:TOrderActions):TOrderState => {
  switch (action.type) {
    case SUBMIT_ORDER_FAILED:
      return {
        ...initialState,
        submitOrderFailed: true,
      };
    case SUBMIT_ORDER_REQUEST:
      return {
        ...initialState,
        submitOrderRequest: true,
      };
    case SUBMIT_ORDER_SUCCESS:
      return {
        ...initialState,
        orderId: action.order?.number,
      };
    case RESET_ORDER:
      return { ...initialState };
    case GET_ORDER_REQUEST:
      return{
        ...initialState,
        getOrderRequest : true,
      };
    case GET_ORDER_FAILED:
      return{
        ...initialState,
        getOrderFailed:true,
      }
    case GET_ORDER_SUCCESS:
      return{
        ...initialState,        
        order:action.order,
      }
    default:
      return state;
  }
};
