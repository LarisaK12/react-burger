import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './submit-order.module.css';
import { OrderContext } from '../../services/app-context';
function SubmitOrder (props){
    
    const{order} = useContext(OrderContext);
    return(
    <span className={styles.submit}>
        <p className="text text_type_digits-medium mr-2">{order.price}</p>
        <CurrencyIcon type="primary" />
        <span className="pl-10"/>
            <Button type="primary" size="medium" onClick={props.onClick} >Оформить заказ</Button>
    </span>
    )
}
SubmitOrder.propTypes ={
    onClick:PropTypes.func
}
export default SubmitOrder