export const SET_ERROR: "SET_ERROR" = "SET_ERROR";
export const CLEAR_ERROR: "CLEAR_ERROR" = "CLEAR_ERROR";
export const setError=(errorText:string)=>{
    return {
        type:SET_ERROR,
        error:errorText
    }
}
export const clearError=()=>{
    return{
        type:CLEAR_ERROR
    }
}
