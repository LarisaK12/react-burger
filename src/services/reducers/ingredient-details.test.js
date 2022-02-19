import { ingredientDetailsReducer } from "./ingredient-details";
import {
    SET_CURRENT_INGREDIENT,
    CLEAR_CURRENT_INGREDIENT
  } from "../actions/ingredient-details";
  const initialState = {
    id: null,
  };
  describe('ingredientDetailsReducer reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
        expect(ingredientDetailsReducer(undefined, {})).toEqual(initialState)
        
     })
     it('reducer SET_CURRENT_INGREDIENT', () => {
        const action={
            type:SET_CURRENT_INGREDIENT,
            id:"12345"
            
           }
         const expectedState =  {
            ...initialState,
            id:"12345",
          } 
        expect(ingredientDetailsReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer CLEAR_CURRENT_INGREDIENT', () => {
        const action={
            type:CLEAR_CURRENT_INGREDIENT
            
           }
         const beforeState =  {
            ...initialState,
            id:"12345",
          } 
        expect(ingredientDetailsReducer(beforeState, action)).toEqual(initialState)
        
     })
    });
  
  