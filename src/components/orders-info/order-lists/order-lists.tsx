import React  from "react";
import styles from "./order-lists.module.css";
import {TOrderLists} from "../../../utils/types";
const OrderLists:React.FC<TOrderLists>=(props)=>{
    return(
        <div className={styles.main}>
            <div className="mr-9">
            <p className="mb-6 text text_type_main-medium">Готовы:</p>
            {props.ready.slice(0,10) && props.ready.slice(0,10).map((orderId:number, index:number) => (
                <div className="mb-2" key={index}>
                <p className={`text text_type_digits-small ${styles.green}`} >{orderId}</p>
                  </div>
                ))}
            
            </div>
            
            <div>
            <p className="mb-6  text text_type_main-medium">В работе:</p>
            {props.waiting && props.waiting.map((orderId:number, index:number) => (
                <div className="mb-2" key={index}>
                <p className="text text_type_digits-small" >{orderId}</p>
                  </div>
                ))}
            
            </div>
        </div>

    )
}
export default OrderLists