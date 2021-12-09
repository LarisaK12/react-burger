import {
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
} from "../actions/ingredient-details";
const initialState = {
  id: null,
};
export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return { ...state, id: action.id };
    case CLEAR_CURRENT_INGREDIENT:
      return { ...initialState };
    default:
      return state ;
  }
};
