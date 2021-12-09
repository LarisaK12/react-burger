import {
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILED,
  RESET_ORDER,
} from "../actions/order-details";
const initialState = {
  orderId: null,
  submitOrderRequest: false,
  submitOrderFailed: false,
};
export const orderDetailsReducer = (state = initialState, action) => {
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
        orderId: action.data,
        submitOrderRequest: false,
        submitOrderFailed: false,
      };
    case RESET_ORDER:
      return { ...initialState };
    default:
      return state;
  }
};
