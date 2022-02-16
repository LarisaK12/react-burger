import { loginReducer } from "./login";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
  } from "../actions/login";
  const initialState = {
    loginRequest: false,
    loginRequestFailed: false,
    logoutRequest: false,
    logoutRequestFailed: false,
    loggedIn: false
  };
  describe('Login reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
        expect(loginReducer(undefined, {})).toEqual(initialState)
        
     })
     it('reducer LOGIN_REQUEST', () => {
        const action={
            type:LOGIN_REQUEST
            
           }
         const expectedState =  {
            ...initialState,
            loginRequest: true,
          } 
        expect(loginReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer LOGIN_FAILED', () => {
        const action={
            type:LOGIN_FAILED
            
           }
         const expectedState =  {
            ...initialState,
            loginRequestFailed: true,
          } 
        expect(loginReducer(initialState, action)).toEqual(expectedState)
        
     }) 
     it('reducer LOGOUT_REQUEST', () => {
        const action={
            type:LOGOUT_REQUEST
            
           }
         const expectedState =  {
            ...initialState,
            logoutRequest: true,
          } 
        expect(loginReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer LOGOUT_FAILED', () => {
        const action={
            type:LOGOUT_FAILED
            
           }
         const expectedState =  {
            ...initialState,
            logoutRequestFailed: true,
          } 
        expect(loginReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer LOGIN_SUCCESS', () => {
        const action={
            type:LOGIN_SUCCESS
            
           }
         const expectedState =  {
            ...initialState,
            loggedIn: true,
          } 
        expect(loginReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer LOGOUT_SUCCESS', () => {
        const action={
            type:LOGOUT_SUCCESS
            
           }
         const beforeState =  {
            ...initialState,
            loggedIn: true,
          } 
        expect(loginReducer(beforeState, action)).toEqual(initialState)
        
     }) 
    });