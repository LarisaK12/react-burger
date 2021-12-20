import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REG_USER_REQUEST,
  REG_USER_SUCCESS,
  REG_USER_FAILED,
} from "../actions/profile";
const initialState = {
  user: null,
  profileRequest: false,
  profileRequestFailed: false,
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case REG_USER_FAILED:
      return {
        ...initialState,
        profileRequestFailed: true,
      };
    case REG_USER_REQUEST:
      return {
        ...initialState,
        profileRequest: true,
      };
    case REG_USER_SUCCESS:
      return {
        user: {
          name: action.data.user.name,
          email: action.data.user.email,
        },
        profileRequest: false,
        profileRequestFailed: false,
      };
    case LOGIN_FAILED:
      return {
        ...initialState,
        profileRequestFailed: true,
      };
    case LOGIN_REQUEST:
      return {
        ...initialState,
        profileRequest: true,
      };
    case LOGIN_SUCCESS:
      return {
        user: {
          name: action.data.user.name,
          email: action.data.user.email,
        },
        profileRequest: false,
        profileRequestFailed: false,
      };
    default:
      return state;
  }
};
