import {
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILED,
  RESET_ORDER,
  TOrderActions,
} from "../actions/order-details";
export type TOrderState = {
  orderId: null|undefined|number,
  submitOrderRequest: boolean,
  submitOrderFailed: boolean,
};
const initialState:TOrderState = {
  orderId: null,
  submitOrderRequest: false,
  submitOrderFailed: false,
};
export const orderDetailsReducer = (state:TOrderState = initialState, action:TOrderActions):TOrderState => {
  switch (action.type) {
    case SUBMIT_ORDER_FAILED:
      return {
        orderId: null,
        submitOrderRequest: false,
        submitOrderFailed: true,
      };
    case SUBMIT_ORDER_REQUEST:
      return {
        orderId: null,
        submitOrderFailed: false,
        submitOrderRequest: true,
      };
    case SUBMIT_ORDER_SUCCESS:
      return {
        orderId: action.order?.number,
        submitOrderRequest: false,
        submitOrderFailed: false,
      };
    case RESET_ORDER:
      return { ...initialState };
    default:
      return state;
  }
};
