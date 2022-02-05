import { TOrder, TWSResponse } from "../../utils/types";

import { WS_URL, ORDERS_ALL_URL,USER_ORDERS_URL   } from "../../utils/burger-constants";
import { getToken } from "../../utils/utils";
export const WS_CONNECTION_START:"WS_CONNECTION_START" ="WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS:"WS_CONNECTION_SUCCESS" ="WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR:"WS_CONNECTION_ERROR" ="WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED:"WS_CONNECTION_CLOSED" ="WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE:"WS_GET_MESSAGE" ="WS_GET_MESSAGE";
export const WS_SEND_MESSAGE:"WS_SEND_MESSAGE" ="WS_SEND_MESSAGE";
export const WS_CLOSE_CONNECTION:"WS_CLOSE_CONNECTION"="WS_CLOSE_CONNECTION";
export interface IStartConnection{
    readonly type:typeof WS_CONNECTION_START,
    readonly payload:string
}
export interface IConnectionStarted{
    readonly type:typeof WS_CONNECTION_SUCCESS
}
export interface IConnectionError{
    readonly type:typeof WS_CONNECTION_ERROR,
    readonly payload?:Event
}
export interface IConnectionClosed{
    readonly type:typeof WS_CONNECTION_CLOSED
}
export interface IGetMessage{
    readonly type:typeof WS_GET_MESSAGE,
    readonly payload:TWSResponse
}
export interface ISendMessage{
    readonly type:typeof WS_SEND_MESSAGE,
    readonly payload:TOrder
}
export interface ICloseConnection{
    readonly type:typeof WS_CLOSE_CONNECTION
}
export type TWSActions = IStartConnection | IConnectionStarted |IConnectionError |IConnectionClosed |IGetMessage |ISendMessage | ICloseConnection;
export const startConnection=(mode:string):IStartConnection=>{
    const token = getToken();
    const wsUrl = mode === "personal"?`${WS_URL}${USER_ORDERS_URL}?token=${token}`:`${WS_URL}${ORDERS_ALL_URL}`;
    return{
        type:WS_CONNECTION_START,
        payload:wsUrl
    }
}
export const closeConnection=():ICloseConnection=>{
    return{
        type:WS_CLOSE_CONNECTION,
        
    }
}
export const connectionStarted=():IConnectionStarted=>{
    return{
        type:WS_CONNECTION_SUCCESS
    }
}
export const connectionError=(evt:Event|undefined):IConnectionError=>{
    return{
        type:WS_CONNECTION_ERROR,
        payload:evt
    }
}
export const connectionClosed=():IConnectionClosed=>{
    return{
        type:WS_CONNECTION_CLOSED
    }
}
export const getMessage=(msg:string):IGetMessage=>{
    const answer:TWSResponse = JSON.parse(msg);
    return{
        type:WS_GET_MESSAGE,
        payload:answer
    }
}
export const sendMessage=(msg:TOrder):ISendMessage=>{
    return{
        type:WS_SEND_MESSAGE,
        payload:msg
    }
}
