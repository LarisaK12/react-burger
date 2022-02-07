import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import {socketMiddleware} from "./middleware"

const enhancer = composeWithDevTools(applyMiddleware(thunk, socketMiddleware()));

export const store = createStore(rootReducer, enhancer);
