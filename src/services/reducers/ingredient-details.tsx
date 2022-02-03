import {
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
  TCurrentIngredientActions
} from "../actions/ingredient-details";
type TCurrentIngredientState={
  id:string|null|undefined
}
const initialState:TCurrentIngredientState = {
  id: null,
};
export const ingredientDetailsReducer = (state:TCurrentIngredientState = initialState, action:TCurrentIngredientActions):TCurrentIngredientState => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return { ...state, id: action.id };
    case CLEAR_CURRENT_INGREDIENT:
      return { ...initialState };
    default:
      return state ;
  }
};
