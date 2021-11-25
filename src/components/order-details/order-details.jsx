import {useContext} from "react";
import styles from './order-details.module.css';
import DoneGif from '../../images/done.gif';
import { OrderContext } from "../../services/app-context";

function OrderDetails(){
    
    const{order} = useContext(OrderContext);
    return(
        <div className={`${styles.flexcol}`}>
            <p className="text text_type_digits-medium">{order.orderId}</p>
            <p className="text text_type_main-medium pt-8">идентификатор заказа</p>
            <img src={DoneGif} className="pt-15 pb-15" alt="ваш заказ начали готовить"></img>
            <p className="text text_type_main-small pb-2">ваш заказ начали готовить</p>
            <p className="text text_type_main-small text_color_inactive">дождитесь готовности на орбитальной станции</p>
        </div>
    )
}
export default OrderDetails