export const SET_CURRENT_INGREDIENT: "SET_CURRENT_INGREDIENT" =
  "SET_CURRENT_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT: "CLEAR_CURRENT_INGREDIENT" =
  "CLEAR_CURRENT_INGREDIENT";
export interface ISetCurrentIngredient{
  readonly type: typeof SET_CURRENT_INGREDIENT,
  readonly id:string
}
export interface IClearCurrentIngredient{
  readonly type: typeof CLEAR_CURRENT_INGREDIENT
}
export type TCurrentIngredientActions= ISetCurrentIngredient|IClearCurrentIngredient
export const setCurrentIngredient =(ingredientId:string):ISetCurrentIngredient=>{
  return{
    type:SET_CURRENT_INGREDIENT,
    id:ingredientId
  }
}
export const clearCurrentIngredient =():IClearCurrentIngredient=>{
  return{
    type:CLEAR_CURRENT_INGREDIENT
  }
}
