import {
    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_SUCCESS,
    SUBMIT_ORDER_FAILED,
    RESET_ORDER,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
  } from "../actions/order-details";
  import {orderDetailsReducer} from "../reducers/order-details";
  const initialState = {
    orderId: null,
    submitOrderRequest: false,
    submitOrderFailed: false,
    getOrderRequest:false,
    getOrderFailed:false,
  };
  
  describe('Profile reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
        expect(orderDetailsReducer(undefined, {})).toEqual(initialState)
        
     })
     it('reducer SUBMIT_ORDER_REQUEST', () => {
        const action={
            type:SUBMIT_ORDER_REQUEST
            
           }
         const expectedState =  {
            ...initialState,
            submitOrderRequest: true,
          } 
        expect(orderDetailsReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer SUBMIT_ORDER_FAILED', () => {
        const action={
            type:SUBMIT_ORDER_FAILED
            
           }
         const expectedState =  {
            ...initialState,
            submitOrderFailed: true,
          } 
        expect(orderDetailsReducer(initialState, action)).toEqual(expectedState)
        
     }) 
      it('reducer SUBMIT_ORDER_SUCCESS', () => {
        const action={
            type:SUBMIT_ORDER_SUCCESS,
            order: {number: 1234},
          }
         const expectedState =  {
            ...initialState,
            orderId:1234
          } 
        expect(orderDetailsReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer RESET_ORDER', () => {
        const action={
            type:RESET_ORDER
            
           }
         const firstState =  {
            ...initialState,
            orderId:1234
          } 
        expect(orderDetailsReducer(firstState, action)).toEqual(initialState)
        
     })
     it('reducer GET_ORDER_REQUEST', () => {
        const action={
            type:GET_ORDER_REQUEST
            
           }
         const expectedState =  {
            ...initialState,
            getOrderRequest: true,
          } 
        expect(orderDetailsReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer GET_ORDER_FAILED', () => {
        const action={
            type:GET_ORDER_FAILED
            
           }
         const expectedState =  {
            ...initialState,
            getOrderFailed: true,
          } 
        expect(orderDetailsReducer(initialState, action)).toEqual(expectedState)
        
     })
     it('reducer GET_ORDER_SUCCESS', () => {
         const order={
            price:1,
            status:"done",
            createdAt:new Date(),
            updatedAt:new Date(),
            number:1234,
            name:"name1",
            _id:"id1",
            ingredients:[]
        }
        const action={
            type:GET_ORDER_SUCCESS,
            order
           }
         const expectedState =  {
            ...initialState,
            order
          } 
        expect(orderDetailsReducer(initialState, action)).toEqual(expectedState)
        
     })
  });