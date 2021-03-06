import { combineReducers } from "redux";
import { burgerConstructor } from "./burger-constructor";
import { ingredientsReducer } from "./ingredients";
import { errorReducer } from "./error";
import { orderDetailsReducer } from "./order-details";
import { ingredientDetailsReducer } from "./ingredient-details";
import { tabReducer } from "./tab";
import { profileReducer } from "./profile";
import { loginReducer } from "./login";
import { wSReducer } from "./ws";
export const rootReducer = combineReducers({
  constructor: burgerConstructor,
  ingredients: ingredientsReducer,
  error: errorReducer,
  order: orderDetailsReducer,
  currentIngredient: ingredientDetailsReducer,
  tab: tabReducer,
  profile: profileReducer,
  login: loginReducer,
  ws:wSReducer
});
