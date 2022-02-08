import React ,{useMemo} from "react";
import styles from "./order-lists.module.css";
import {TOrderLists} from "../../../utils/types";
import {splitArray} from "../../../utils/utils";
const OrderLists:React.FC<TOrderLists>=(props)=>{
    
    const readyOrders = useMemo(()=>{
        return splitArray(props.ready,10);
    },[props]);
    return(
        <div className={styles.main}>
            <div className="mr-9">
            <p className="mb-6 ml-2 text text_type_main-medium">Готовы:</p>
            <div className={styles.number_container}>
            {readyOrders && readyOrders.length > 0 && readyOrders.map((orders:number[], index:number ) => (

                <div className="m-2" key={index}>
                    {orders.map((orderId:number, index2:number) => (
                <p className={`text text_type_digits-small ${styles.green}`} key={index2} >{orderId}</p>
                    ))
                    }
                  </div>
                ))}
            </div>
            </div>
            
            <div>
            <p className="mb-6 ml-2  text text_type_main-medium" style={{ whiteSpace: 'nowrap' }}>В работе:</p>
            {props.waiting && props.waiting.map((orderId:number, index:number) => (
                <div className="m-2" key={index}>
                <p className="text text_type_digits-small" >{orderId}</p>
                  </div>
                ))}
            
            </div>
        </div>

    )
}
export default OrderLists