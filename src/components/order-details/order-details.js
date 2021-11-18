import React from "react";
import PropTypes from 'prop-types';
import styles from './order-details.module.css';
import DoneGif from '../../images/done.gif';
function OrderDetails(props){
    return(
        <div className={`${styles.flexcol}`}>
            <p className='text text_type_digits-medium'>{props.number}</p>
            <p className='text text_type_main-medium pt-8'>идентификатор заказа</p>
            <img src={DoneGif} className='pt-15 pb-15' alt='done'></img>
            <p className='text text_type_main-small pb-2'>ваш заказ начали готовить</p>
            <p className='text text_type_main-small text_color_inactive'>дождитесь готовности на орбитальной станции</p>
        </div>
    )
}
OrderDetails.propTypes ={
    number:PropTypes.number
}
export default OrderDetails