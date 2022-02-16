import { errorReducer } from "./error";
import { SET_ERROR, CLEAR_ERROR } from "../actions/error";
const initialState = {
    error: "",
  };
  describe('errorReducer reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
        expect(errorReducer(undefined, {})).toEqual(initialState)
        
     })
     it('reducer SET_ERROR', () => {
        const action={
            type:SET_ERROR,
            error:"12345"
            
           }
         const expectedState =  {
            ...initialState,
            error:"12345",
          } 
        expect(errorReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer CLEAR_ERROR', () => {
        const action={
            type:CLEAR_ERROR
            
           }
         const beforeState =  {
            ...initialState,
            id:"12345",
          } 
        expect(errorReducer(beforeState, action)).toEqual(initialState)
        
     })
    });
  
  