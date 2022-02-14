import { 
    WS_CONNECTION_CLOSED, 
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE 
    } from "../actions/ws";
import { wSReducer } from "./ws";
const initialState = {
    orders:[],
    total:0,
    totalToday:0,
    isConnected:false,
    errorText:""
}
describe('WS reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
      expect(wSReducer(undefined, {})).toEqual(initialState)
      
    })
    it('reducer WS_CONNECTION_START', () => {
        const action ={ type: WS_CONNECTION_START}
        expect(wSReducer(initialState,action)).toEqual(initialState)
         
      })
      it('reducer WS_CONNECTION_ERROR', () => {
        const action ={ type: WS_CONNECTION_ERROR,
        payload:{timeStamp:"121212"}}
        const expectedState = {
            ...initialState,
            errorText:"121212"
        }
        
        expect(wSReducer(initialState,action)).toEqual(expectedState)
         
      })
      it('reducer WS_CONNECTION_CLOSED', () => {
        const action ={ type: WS_CONNECTION_CLOSED}
        const stateConnOpened={
            ...initialState,
            isConnected:true
        }
        expect(wSReducer(stateConnOpened,action)).toEqual(initialState)
         
      })
      it('reducer WS_CONNECTION_SUCCESS', () => {
        const action ={ type: WS_CONNECTION_SUCCESS}
        const expectedState={
            ...initialState,
            isConnected:true
        }
        expect(wSReducer(initialState,action)).toEqual(expectedState)
         
      })
      it('reducer WS_GET_MESSAGE', () => {
        const total =123;
        const totalToday=12;
        const orders = [{
            price:1,
            status:"done",
            createdAt:new Date(),
            updatedAt:new Date(),
            number:1234,
            name:"name1",
            _id:"id1",
            ingredients:[]
        },
        {
            price:2,
            status:"done",
            createdAt:new Date(),
            updatedAt:new Date(),
            number:1235,
            name:"name2",
            _id:"id2",
            ingredients:[]
        }
        ]
        const action ={ type: WS_GET_MESSAGE,
        payload:{
            total,
            totalToday,
            orders
        }}
        const expectedState={
            ...initialState,
            total,
            totalToday,
            orders
        }
        expect(wSReducer(initialState,action)).toEqual(expectedState)
         
      })
      
  })