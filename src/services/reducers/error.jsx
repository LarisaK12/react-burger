import { SET_ERROR, CLEAR_ERROR } from "../actions/error";
const InitialState = {
  error: "",
};
export const errorReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case CLEAR_ERROR:
      return InitialState;
    default:
      return state ;
  }
};
