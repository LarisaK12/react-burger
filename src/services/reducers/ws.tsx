import { TWSActions, 
    WS_CONNECTION_CLOSED, 
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CLOSE_CONNECTION, 
    WS_GET_MESSAGE 
    } from "../actions/ws";
    import { TOrder } from "../../utils/types";
    export type TWSState = {
        orders: ReadonlyArray<TOrder>,
        total: number,
        totalToday: number,
        isConnected:boolean,
        errorText?:string
      }
    const initialState:TWSState = {
        orders:[],
        total:0,
        totalToday:0,
        isConnected:false,
        errorText:""
    }
export const wSReducer = (state:TWSState = initialState, action:TWSActions):TWSState => {
    switch (action.type) {
        case WS_CONNECTION_START:
            return {
                ...initialState,
            }
        case WS_CONNECTION_ERROR:
            return{
                ...state,
                errorText:action.payload?.timeStamp.toString()
            }
        case WS_CONNECTION_CLOSED:
            return{
                ...initialState,
                isConnected: false
            }
        case WS_CONNECTION_SUCCESS:
            return{
                ...state,
                isConnected:true,
                errorText:"",
            }
        case WS_GET_MESSAGE:
            return{
                ...state,
                orders: action.payload.orders,
                total:action.payload.total,
                totalToday:action.payload.totalToday
            }  
        case WS_CLOSE_CONNECTION:
            return{
                ...state
            }      
        default: return state;
    }
}
