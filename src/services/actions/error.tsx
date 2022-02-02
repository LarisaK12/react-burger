export const SET_ERROR: "SET_ERROR" = "SET_ERROR";
export const CLEAR_ERROR: "CLEAR_ERROR" = "CLEAR_ERROR";
export interface ISetError{
    readonly type:typeof SET_ERROR,
    readonly error:string
}
export interface IClearError{
    readonly type:typeof CLEAR_ERROR
}
export type TErrorActions = ISetError|IClearError
export const setError=(errorText:string):ISetError=>{
    return {
        type:SET_ERROR,
        error:errorText
    }
}
export const clearError=():IClearError=>{
    return{
        type:CLEAR_ERROR
    }
}
