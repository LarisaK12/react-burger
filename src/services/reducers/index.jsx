import { combineReducers } from "redux";
import { burgerConstructor } from "./burger-constructor";
import { ingredientsReducer } from "./ingredients";
import { errorReducer } from "./error";
import { orderDetailsReducer } from "./order-details";
import { ingredientDetailsReducer } from "./ingredient-details";
import { tabReducer } from "./tab";
export const rootReducer = combineReducers({
  constructor: burgerConstructor,
  ingredients: ingredientsReducer,
  error: errorReducer,
  order: orderDetailsReducer,
  currentIngredient: ingredientDetailsReducer,
  tab: tabReducer,
});
