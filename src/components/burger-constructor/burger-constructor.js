import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import BurgerElement from '../burger-element/burger-element';
import SubmitOrder from '../submit-order/submit-order';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
const burgerPropTypes = PropTypes.shape({
    _id:PropTypes.string,
    type: PropTypes.string,
    isLocked:PropTypes.bool,
    text:PropTypes.string,
    price:PropTypes.number,
    thumbnail:PropTypes.string
})
function BurgerConstructor (props){
    
    const [visibleModal, setVisibleModal] =useState(false);
    
    return (
        
        props.burger.length > 1 &&<>
    <div className={styles.burger} >
            <BurgerElement  {...props.burger[0]}></BurgerElement>
            <div className="pb-4"/>
            <div className={styles.scrollable}>
                {props.burger.filter(ingr=>ingr.type=='undefined').map((ingredient, index)=>
                <span key={index}>
                <BurgerElement {...ingredient}></BurgerElement>
                <div className="pb-4"/>
                </span>
                )}
                
            </div>
            <div className="pb-4"/>    
            <BurgerElement  {...props.burger[props.burger.length-1]}></BurgerElement>
         
    </div>
    
    <div className='pt-10'></div>
    <div onClick={()=>setVisibleModal(!visibleModal)} >
    <SubmitOrder  price={props.burger.map(ingr=>ingr.price).reduce((s,price)=>s+price)}/>
    </div>
    {visibleModal &&
             <Modal onClose={()=>setVisibleModal(false)} header=''  > 
             <OrderDetails number={Math.floor(Math.random()*1000000)}/>                 
             </Modal>}        
    </>
    )
}
BurgerConstructor.propTypes = {
    burger: PropTypes.arrayOf(burgerPropTypes.isRequired)
  }; 
export default BurgerConstructor