import { TIngredient } from "../../utils/types";
import { IClearCurrentIngredient } from "./ingredient-details";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT: "REMOVE_INGREDIENT" = "REMOVE_INGREDIENT";
export const MOVE_INGREDIENT: "MOVE_INGREDIENT" = "MOVE_INGREDIENT";
export const CLEAR_INGREDIENTS: "CLEAR_INGREDIENTS" = "CLEAR_INGREDIENTS";
export interface IAddIngredient{
    readonly type:typeof ADD_INGREDIENT,
    readonly item:TIngredient
}
export interface IClearIngredients{
    readonly type : typeof CLEAR_INGREDIENTS
}
export interface IRemoveIngredient{
    readonly type : typeof REMOVE_INGREDIENT,
    readonly place:number
}
export interface IMoveIngredient{
    readonly type : typeof MOVE_INGREDIENT,
    readonly oldPlace:number,
    readonly newPlace:number,
}
export type TBurgerIngredientActions= IAddIngredient|IClearIngredients|IRemoveIngredient|IMoveIngredient
export const addIngredient=(ingredient:TIngredient):IAddIngredient=>{
    return{
        type:ADD_INGREDIENT,
        item:ingredient
    }
}
export const clearIngredients=():IClearIngredients=>{
    return {
        type:CLEAR_INGREDIENTS
    }
}
export const removeIngredient=(place:number):IRemoveIngredient=>{
    return{
        type: REMOVE_INGREDIENT,
        place:place
    }
}
export const moveIngredient =(oldPlace:number, newPlace:number):IMoveIngredient=>{
    return{
        type:MOVE_INGREDIENT,
        oldPlace:oldPlace,
        newPlace:newPlace
    }
}