import { ingredientsReducer } from "./ingredients";
import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
  } from "../actions/ingredients";
  const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
  };
  const ingrSample={
    _id: "string",
    name: "string",
    type: "string",
    proteins: 12,
    fat: 12,
    carbohydrates: 12,
    calories: 12,
    price: 12,
    image: "string",
    image_mobile: "string",
    image_large: "string",
  }
  describe('Ingredients reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
        expect(ingredientsReducer(undefined, {})).toEqual(initialState)
        
     })
     it('reducer GET_INGREDIENTS_REQUEST', () => {
        const action={
            type:GET_INGREDIENTS_REQUEST
            
           }
         const expectedState =  {
            ...initialState,
            ingredientsRequest: true,
          } 
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer GET_INGREDIENTS_FAILED', () => {
        const action={
            type:GET_INGREDIENTS_FAILED,
            
           }
         const expectedState =  {
            ...initialState,
            ingredientsFailed: true,
          } 
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer GET_INGREDIENTS_SUCCESS', () => {
        const action={
            type:GET_INGREDIENTS_SUCCESS,
            ingredients:[ingrSample]
           }
         const expectedState =  {
            ...initialState,
            ingredients:[ingrSample]
          } 
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState)
        
     }) 
    });
  
  
