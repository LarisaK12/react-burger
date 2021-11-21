import {useState} from 'react';
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
    const top = props.burger.filter(b=>b.type==='top')[0];
    const bottom = props.burger.filter(b=>b.type==='bottom')[0];
    const middleIngredients = props.burger.filter(ingr=>ingr.type==='undefined');
    const orderNumber =Math.floor(Math.random()*1000000);
    const closeModal=()=>setVisibleModal(false);
    const burgerPrice =props.burger.length===0?0:props.burger.map(ingr=>ingr.price).reduce((s,price)=>s+price);
    const onSubmit =()=>setVisibleModal(!visibleModal);
    return (        
        Boolean(props.burger.length ) &&<>
    <div className={styles.burger} >
            <BurgerElement  {...top} isLocked={true}></BurgerElement>
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
            <BurgerElement  {...bottom} isLocked={true}></BurgerElement>
         
    </div>
    
    <div className="pt-10"></div>
    <div onClick={onSubmit} >
    <SubmitOrder  price={burgerPrice}/>
    </div>
    {visibleModal &&
             <Modal onClose={closeModal} header=""  > 
             <OrderDetails number={orderNumber}/>                 
             </Modal>}        
    </>
    )
}
BurgerConstructor.propTypes = {
    burger: PropTypes.arrayOf(burgerPropTypes.isRequired)
  }; 
export default BurgerConstructor