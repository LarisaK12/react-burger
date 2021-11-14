import React from "react";
import styles from './submit-order.module.css';
import {Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
function SubmitOrder (props){
    return(
    <span className={styles.submit}>
        <p className="text text_type_digits-medium mr-2">{props.price}</p>
        <CurrencyIcon type="primary" />
        <span className='pl-10'/>
            <Button type='primary' size='medium'>Оформить заказ</Button>
    </span>
    )
}

export default SubmitOrder