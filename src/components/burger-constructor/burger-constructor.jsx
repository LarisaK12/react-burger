import React, {useState, useContext} from 'react';
import styles from './burger-constructor.module.css';
import BurgerElement from '../burger-element/burger-element';
import SubmitOrder from '../submit-order/submit-order';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { OrderContext, ErrorContext } from '../../utils/appContext';
import {GET_ORDER_ID_URL} from '../../utils/burger-constants';

function BurgerConstructor (){
    const{ order, orderDispatcher } = useContext(OrderContext);
    const{ setError } = useContext(ErrorContext);
    const [visibleModal, setVisibleModal] =useState(false);
    const top = order.burger.filter(b=>b.type==='top')[0];
    const bottom = order.burger.filter(b=>b.type==='bottom')[0];
    const middleIngredients = order.burger.filter(ingr=>ingr.type==='undefined');
    const closeModal=()=>setVisibleModal(false);
    const onSubmit =()=>{
        getOrderId(order.burger).then((id)=>{
            if(typeof id === 'number')
            {
                orderDispatcher({type:"setOrderId", orderId: id});
                setVisibleModal(true);
            }
            else setError("Не удалось создать заказ. Попробуйте снова.");
        })
    }
    const getOrderId = async (burger)=>{
        try{        
            const result = await fetch(GET_ORDER_ID_URL,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ingredients:burger.map(ingr=>ingr._id)})
              });
            const resultObj = await result.json();
            if(!resultObj.success) throw new Error("Нет данных")
            return resultObj.order.number;
         }
         catch(e){
             console.log(e)
            return null;
        };
    }
    return (        
        Boolean(order.burger.length ) &&<>
    <div className={styles.burger} >
            {top && <BurgerElement  {...top} isLocked={true}></BurgerElement>}
            <div className="pb-4"/>
            <div className={styles.scrollable}>
                {middleIngredients.map((ingredient, index)=>
                <span key={index}>
                <BurgerElement {...ingredient}></BurgerElement>
                <div className="pb-4"/>
                </span>
                )}
                
            </div>
            <div className="pb-4"/>    
            {bottom && <BurgerElement  {...bottom} isLocked={true}></BurgerElement>}
         
    </div>
    
    <div className="pt-10"></div>
    <div onClick={onSubmit} >
    <SubmitOrder  />
    </div>
    {visibleModal &&
             <Modal onClose={closeModal} header=""  > 
             <OrderDetails />                 
             </Modal>}        
    </>
    )
}
export default BurgerConstructor