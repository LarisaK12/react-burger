import { burgerConstructor } from "./burger-constructor";
import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_INGREDIENTS,
  } from "../actions/burger-constructor";
  const initialState = {
    burger: [],
    price: 0,
  };
  const ingrSample={
    _id: "string",
    name: "string",
    type: "main",
    proteins: 12,
    fat: 12,
    carbohydrates: 12,
    calories: 12,
    price: 12,
    image: "string",
    image_mobile: "string",
    image_large: "string",
  }
  
  const addedIngredientSample1={
    _id: "string",
    type:  undefined,
    isLocked: false,
    text: "string",
    price: 12,
    thumbnail: "string",
    place: 0,
  }
  const addedIngredientSample2={
    _id: "string",
    type:  undefined,
    isLocked: false,
    text: "string",
    price: 12,
    thumbnail: "string",
    place: 1,
  
}
const addedIngredientSample3={
    _id: "string3",
    type:  undefined,
    isLocked: false,
    text: "string",
    price: 12,
    thumbnail: "string",
    place: 2,
  
}
const addedIngredientSample4={
    _id: "string4",
    type:  undefined,
    isLocked: false,
    text: "string",
    price: 12,
    thumbnail: "string",
    place: 3,
  
}
describe('burgerConstructor reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
        expect(burgerConstructor(undefined, {})).toEqual(initialState)
        
     })
     it('reducer CLEAR_INGREDIENTS', () => {
        const action={
            type:CLEAR_INGREDIENTS,
            
           }
         const beforeState =  {
            burger:[addedIngredientSample1,addedIngredientSample2],
            price:22
          } 
        expect(burgerConstructor(beforeState, action)).toEqual(initialState)
        
     })
     it('reducer ADD_INGREDIENT', () => {
        const action={
            type:ADD_INGREDIENT,
            item:ingrSample
            
           }
         const expectedState =  {
            burger:[addedIngredientSample1],
            price:addedIngredientSample1.price
          } 
        expect(burgerConstructor(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer REMOVE_INGREDIENT', () => {
        const action={
            type:REMOVE_INGREDIENT,
            place:0
            
           }
        const beforeState={
            burger:[addedIngredientSample1, addedIngredientSample2],
            price:addedIngredientSample1.price+addedIngredientSample2.price
        }
         const expectedState =  {
            burger:[ {...addedIngredientSample2, place:0}],
            price:addedIngredientSample2.price
          } 
        expect(burgerConstructor(beforeState, action)).toEqual(expectedState)
        
     })
     it('reducer MOVE_INGREDIENT', () => {
        const action={
            type:MOVE_INGREDIENT,
            oldPlace:1,
            newPlace:2
            
           }
        const beforeState={
            burger:[addedIngredientSample1, addedIngredientSample2, addedIngredientSample3,addedIngredientSample4],
            price:addedIngredientSample1.price*4
        }
         const expectedState =  {
            burger:[ addedIngredientSample1,{...addedIngredientSample3, place:1}, {...addedIngredientSample2, place:2}, addedIngredientSample4],
            price:addedIngredientSample1.price*4
          } 
        expect(burgerConstructor(beforeState, action)).toEqual(expectedState)
        
     })
    });
  
  