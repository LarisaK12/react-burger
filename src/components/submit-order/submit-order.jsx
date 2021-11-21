import PropTypes from 'prop-types';
import {Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './submit-order.module.css';
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
SubmitOrder.propTypes ={
    price:PropTypes.number
}
export default SubmitOrder