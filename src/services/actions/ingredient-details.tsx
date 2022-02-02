export const SET_CURRENT_INGREDIENT: "SET_CURRENT_INGREDIENT" =
  "SET_CURRENT_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT: "CLEAR_CURRENT_INGREDIENT" =
  "CLEAR_CURRENT_INGREDIENT";
export const setCurrentIngredient =(ingredientId:string)=>{
  return{
    type:SET_CURRENT_INGREDIENT,
    id:ingredientId
  }
}
export const clearCurrentIngredient =()=>{
  return{
    type:CLEAR_CURRENT_INGREDIENT
  }
}
