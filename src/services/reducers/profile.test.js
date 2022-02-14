import {profileReducer} from "../reducers/profile";
import {
    REG_USER_REQUEST,
    REG_USER_SUCCESS,
    REG_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    SET_USER_REQUEST,
    SET_USER_FAILED,
    SET_USER_SUCCESS,
    FORGOT_PASS_REQUEST,
    FORGOT_PASS_FAILED,
    FORGOT_PASS_SUCCESS,
  } from "../actions/profile";
import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "../actions/login";
  const initialState = {
    user: null,
    passwordResetRequired: false,
    passwordReseted: false,
    message: "",
    profileRequest: false,
    profileRequestFailed: false,
    setProfileRequest: false,
    setProfileRequestFailed: false,
    regRequest: false,
    regRequestFailed: false,
    resetPassRequest: false,
    resetPassRequestFailed: false,
    forgotPassRequest: false,
    forgotPassRequestFailed: false,
  };
describe('Profile reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
        expect(profileReducer(undefined, {})).toEqual(initialState)
        
     })
    it('reducer реагирует на успешный логин', () => {
       const action={
        type:LOGIN_SUCCESS,
        user:{ 
        name:"Loo",
        email:"Loo@mail.ru"
        }
       }
       const expectedState={
        user: { 
            name:"Loo",
            email:"Loo@mail.ru"
            },
        passwordResetRequired: false,
        passwordReseted: false,
        message: "",
        profileRequest: false,
        profileRequestFailed: false,
        setProfileRequest: false,
        setProfileRequestFailed: false,
        regRequest: false,
        regRequestFailed: false,
        resetPassRequest: false,
        resetPassRequestFailed: false,
        forgotPassRequest: false,
        forgotPassRequestFailed: false,
       }
        expect(profileReducer(initialState, action)).toEqual(expectedState)
        
     })
    it('reducer реагирует на успешный разлогин', () => {
        const action={
         type:LOGOUT_SUCCESS
        }
        const loggedInState={
         user: { 
             name:"Loo",
             email:"Loo@mail.ru"
             },
         passwordResetRequired: false,
         passwordReseted: false,
         message: "",
         profileRequest: false,
         profileRequestFailed: false,
         setProfileRequest: false,
         setProfileRequestFailed: false,
         regRequest: false,
         regRequestFailed: false,
         resetPassRequest: false,
         resetPassRequestFailed: false,
         forgotPassRequest: false,
         forgotPassRequestFailed: false,
        }
         expect(profileReducer(loggedInState, action)).toEqual(initialState)
         
      })
    it('reducer реагирует на REG_USER_FAILED', () => {
        const action={
         type:REG_USER_FAILED
        }
        const expectedState={
         ...initialState,
         regRequestFailed: true,
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
    it('reducer реагирует на REG_USER_REQUEST', () => {
        const action={
         type:REG_USER_REQUEST
        }
        const expectedState={
         ...initialState,
         regRequest: true,
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
    it('reducer реагирует на REG_USER_SUCCESS', () => {
       const looUser={ name:"Loo",
       email:"Loo@mail.ru"}
        const action={
         type:REG_USER_SUCCESS,
         user:looUser
        }
        const expectedState={
         ...initialState,
         user: looUser
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
    
    it('reducer реагирует на GET_USER_REQUEST', () => {
        const action={
         type:GET_USER_REQUEST
        }
        const expectedState={
         ...initialState,
         profileRequest: true,
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
    it('reducer реагирует на GET_USER_FAILED', () => {
        const action={
         type:GET_USER_FAILED
        }
        const expectedState={
         ...initialState,
         profileRequestFailed: true,
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
    it('reducer реагирует на GET_USER_SUCCESS', () => {
        const looUser={ name:"Loo",
        email:"Loo@mail.ru"}
         const action={
          type:GET_USER_SUCCESS,
          user:looUser
         }
         const expectedState={
          ...initialState,
          user: looUser
         }
          expect(profileReducer(initialState, action)).toEqual(expectedState)
          
       })
       it('reducer реагирует на SET_USER_REQUEST', () => {
        const action={
         type:SET_USER_REQUEST
        }
        const expectedState={
         ...initialState,
         setProfileRequest: true,
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
    it('reducer реагирует на SET_USER_FAILED', () => {
        const action={
         type:SET_USER_FAILED
        }
        const expectedState={
         ...initialState,
         setProfileRequestFailed: true,
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
    it('reducer реагирует на SET_USER_SUCCESS', () => {
        const looUser={ name:"Loo",
        email:"Loo@mail.ru"}
         const action={
          type:SET_USER_SUCCESS,
          user:looUser
         }
         const expectedState={
          ...initialState,
          user: looUser
         }
          expect(profileReducer(initialState, action)).toEqual(expectedState)
          
       })
       it('reducer реагирует на FORGOT_PASS_REQUEST', () => {
        const action={
         type:FORGOT_PASS_REQUEST
        }
        const expectedState={
         ...initialState,
         passwordResetRequired: true,
         profileRequest:true,
         message:""
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
      it('reducer реагирует на FORGOT_PASS_FAILED', () => {
        const action={
         type:FORGOT_PASS_FAILED,
         message:"failed"
        }
        const expectedState={
         ...initialState,
         profileRequestFailed: true,
         message:"failed"
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
      it('reducer реагирует на FORGOT_PASS_SUCCESS', () => {
        const action={
         type:FORGOT_PASS_SUCCESS,
         message:undefined
        }
        const expectedState={
         ...initialState,
         passwordResetRequired: true,
         message:undefined
        }
         expect(profileReducer(initialState, action)).toEqual(expectedState)
         
      })
     
});