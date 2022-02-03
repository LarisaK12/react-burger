import { SET_ERROR, CLEAR_ERROR, TErrorActions } from "../actions/error";
type TErrorState = {
  error:string
}
const InitialState:TErrorState = {
  error: "",
};
export const errorReducer = (state:TErrorState = InitialState, action:TErrorActions):TErrorState => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case CLEAR_ERROR:
      return InitialState;
    default:
      return state ;
  }
};
