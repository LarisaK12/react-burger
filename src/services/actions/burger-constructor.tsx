import { TIngredient } from "../../utils/types";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT: "REMOVE_INGREDIENT" = "REMOVE_INGREDIENT";
export const MOVE_INGREDIENT: "MOVE_INGREDIENT" = "MOVE_INGREDIENT";
export const CLEAR_INGREDIENTS: "CLEAR_INGREDIENTS" = "CLEAR_INGREDIENTS";
export const addIngredient=(ingredient:TIngredient)=>{
    return{
        type:ADD_INGREDIENT,
        item:ingredient
    }
}
export const clearIngredients=()=>{
    return {
        type:CLEAR_INGREDIENTS
    }
}
export const removeIngredient=(place:number)=>{
    return{
        type: REMOVE_INGREDIENT,
        place:place
    }
}
export const moveIngredient =(oldPlace:number, newPlace:number)=>{
    return{
        type:MOVE_INGREDIENT,
        oldPlace:oldPlace,
        newPlace:newPlace
    }
}