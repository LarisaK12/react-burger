import { API_URL, INGREDIENTS_URL } from "../../utils/burger-constants";
import { TIngredient } from "../../utils/types";
import { checkResponse } from "../../utils/utils";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export interface IGetIngredientsRequest{
  readonly type: typeof GET_INGREDIENTS_REQUEST
}
export interface IGetIngredientsSuccess{
  readonly type: typeof GET_INGREDIENTS_SUCCESS
  readonly ingredients:ReadonlyArray<TIngredient>
}
export interface IGetIngredientsFailed{
  readonly type: typeof GET_INGREDIENTS_FAILED
}
export type TIngredientActions= IGetIngredientsFailed|IGetIngredientsRequest|IGetIngredientsSuccess
export const getIngredientsRequest =():IGetIngredientsRequest=>{
  return{
    type: GET_INGREDIENTS_REQUEST
  }
}
export const getIngredientsSuccess =(ingredients:ReadonlyArray<TIngredient>):IGetIngredientsSuccess=>{
  return{
    type: GET_INGREDIENTS_SUCCESS,
    ingredients
  }
}
export const getIngredientsFailed =():IGetIngredientsFailed=>{
  return{
    type: GET_INGREDIENTS_FAILED
  }
}
export function getIngredients() {
  return function (dispatch:any) {
    dispatch(getIngredientsRequest());
    fetch(`${API_URL}${INGREDIENTS_URL}`)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch( getIngredientsSuccess( res.data ));
        } else {
          dispatch(getIngredientsFailed());
        }
      })
      .catch((e) => {
        dispatch(getIngredientsFailed());
      });
  };
}
