import {
  REG_USER_REQUEST,
  REG_USER_SUCCESS,
  REG_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  SET_USER_REQUEST,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_FAILED,
  FORGOT_PASS_SUCCESS,
  RESET_PASS_REQUEST,
  RESET_PASS_FAILED,
  RESET_PASS_SUCCESS,
  TProfileActions
} from "../actions/profile";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, TLoginActions } from "../actions/login";
import { TUser } from "../../utils/types";
type TProfileState = {
  user: null|undefined|TUser,
  passwordResetRequired: boolean,
  passwordReseted: boolean,
  message: null|undefined|string,
  profileRequest: boolean,
  profileRequestFailed: boolean,
  setProfileRequest: boolean,
  setProfileRequestFailed: boolean,
  regRequest: boolean,
  regRequestFailed: boolean,
  resetPassRequest: boolean,
  resetPassRequestFailed: boolean,
  forgotPassRequest: boolean,
  forgotPassRequestFailed: boolean,
};
const initialState:TProfileState = {
  user: null,
  passwordResetRequired: false,
  passwordReseted: false,
  message: "",
  profileRequest: false,
  profileRequestFailed: false,
  setProfileRequest: false,
  setProfileRequestFailed: false,
  regRequest: false,
  regRequestFailed: false,
  resetPassRequest: false,
  resetPassRequestFailed: false,
  forgotPassRequest: false,
  forgotPassRequestFailed: false,
};
export const profileReducer = (state:TProfileState = initialState, action:TProfileActions|TLoginActions):TProfileState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          name: action.user.name,
          email: action.user.email,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case REG_USER_FAILED:
      return {
        ...initialState,
        regRequestFailed: true,
      };
    case REG_USER_REQUEST:
      return {
        ...initialState,
        regRequest: true,
      };
    case REG_USER_SUCCESS:
      return {
        ...initialState,
        regRequest: false,
        regRequestFailed: false,        
        user: action.user?{
          name: action.user?.name,
          email: action.user?.email,
        }:null,
      };
    case GET_USER_REQUEST:
      return {
        ...initialState,
        profileRequest: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...initialState,
        user: action.user?{
          name: action.user?.name,
          email: action.user?.email,
        }:null,
        profileRequest: false,
        profileRequestFailed: false,
      };
    case GET_USER_FAILED:
      return {
        ...initialState,
        profileRequestFailed: true,
      };
    case SET_USER_FAILED:
      return {
        ...state,
        setProfileRequestFailed: true,
        setProfileRequest: false,
      };
    case SET_USER_REQUEST:
      return {
        ...state,
        setProfileRequest: true,
        setProfileRequestFailed: false,
      };
    case SET_USER_SUCCESS:
      return {
        ...initialState,
        user: action.user?{
          name: action.user?.name,
          email: action.user?.email,
        }:null,
        setProfileRequest: false,
        setProfileRequestFailed: false,
      };
    case FORGOT_PASS_REQUEST:
      return {
        ...state,
        message: "",
        passwordResetRequired: true,
        profileRequest: true,
        profileRequestFailed: false,
      };
    case FORGOT_PASS_FAILED:
      return {
        ...state,
        message: action.message,
        passwordResetRequired: false,
        profileRequest: false,
        profileRequestFailed: true,
      };
    case FORGOT_PASS_SUCCESS:
      return {
        ...state,
        message: action.message,
        passwordResetRequired: true,
        profileRequest: false,
        profileRequestFailed: false,
      };
    case RESET_PASS_REQUEST:
      return {
        ...state,
        passwordResetRequired: true,
        passwordReseted: false,
        profileRequest: true,
        profileRequestFailed: false,
      };
    case RESET_PASS_FAILED:
      return {
        ...state,
        message: action.message,
        passwordResetRequired: false,
        passwordReseted: false,
        profileRequest: false,
        profileRequestFailed: true,
      };
    case RESET_PASS_SUCCESS:
      return {
        ...state,
        message: action.message,
        passwordResetRequired: false,
        passwordReseted: true,
        profileRequest: false,
        profileRequestFailed: false,
      };
    default:
      return state;
  }
};
