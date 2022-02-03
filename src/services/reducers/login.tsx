import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  TLoginActions
} from "../actions/login";
export type TLoginState={
  loginRequest: boolean,
  loginRequestFailed: boolean,
  logoutRequest: boolean,
  logoutRequestFailed: boolean,
  loggedIn?:boolean
}
const initialState:TLoginState = {
  loginRequest: false,
  loginRequestFailed: false,
  logoutRequest: false,
  logoutRequestFailed: false,
  loggedIn: false
};

export const loginReducer = (state:TLoginState = initialState, action:TLoginActions):TLoginState => {
  switch (action.type) {
    case LOGIN_FAILED:
      return {
        ...initialState,
        loginRequestFailed: true,
      };
    case LOGIN_REQUEST:
      return {
        ...initialState,
        loginRequest: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        loggedIn: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...initialState,
        logoutRequest: true,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        logoutRequestFailed: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        loggedIn: false,
      };
    default:
      return state;
  }
};
