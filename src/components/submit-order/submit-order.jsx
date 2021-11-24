import { useContext } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './submit-order.module.css';
import { OrderContext } from '../../utils/appContext';
function SubmitOrder (props){
    
    const{order} = useContext(OrderContext);
    return(
    <span className={styles.submit}>
        <p className="text text_type_digits-medium mr-2">{order.price}</p>
        <CurrencyIcon type="primary" />
        <span className="pl-10"/>
            <Button type="primary" size="medium">Оформить заказ</Button>
    </span>
    )
}

export default SubmitOrder