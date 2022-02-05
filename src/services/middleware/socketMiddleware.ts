import  { Middleware, MiddlewareAPI } from 'redux';
import  { AppDispatch, RootState } from "../../utils/types";
import  { WS_CONNECTION_START, connectionError, connectionStarted, getMessage, connectionClosed, WS_CLOSE_CONNECTION } from "../actions/ws";
import { TWSActions } from '../actions/ws';

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;
        return next => (action: TWSActions) => {
            const { dispatch } = store;
            const { type } = action;
            if (type === WS_CONNECTION_START) {
                socket = new WebSocket(action.payload);
            }
            if (socket) {
                
                if(type === WS_CLOSE_CONNECTION){
                socket.close();   
                }
                socket.onopen = event => {
                dispatch(connectionStarted());
                };
                socket.onerror = event => {
                dispatch(connectionError(event));
                };
                socket.onmessage = event => {
                const { data } = event;
                dispatch(getMessage(data));
                };
                socket.onclose = event => {
                dispatch(connectionClosed());
                };

            }
            next(action);
        };
        }) as Middleware;
}
