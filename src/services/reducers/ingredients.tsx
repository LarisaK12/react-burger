import { TIngredient } from "../../utils/types";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  TIngredientActions
} from "../actions/ingredients";
type TIngredientsState={
  ingredients:ReadonlyArray<TIngredient>,
  ingredientsRequest:boolean,
  ingredientsFailed:boolean
}
const initialState:TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};
export const ingredientsReducer = (state:TIngredientsState = initialState, action:TIngredientActions):TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, ingredientsRequest: true };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.ingredients,
        ingredientsRequest: false,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredientsFailed: true,
        ingredients: initialState.ingredients,
        ingredientsRequest: false,
      };
    default: {
      return state;
    }
  }
};
