import styles from "./order-details.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import OrderDetailsExtended from "../components/orders-info/order-details-extended/order-details-extended";
import { useDispatch, useSelector } from "../utils/hooks";
import { Awaiter } from "../components/awaiter/awaiter";
import { getOrder } from "../services/actions/order-details";
import { setError, clearError } from "../services/actions/error";
import Modal from "../components/modal/modal";

export const OrderDetailsPage= ()=>{
    let { id }:{id:string} = useParams();
  const {getOrderRequest, getOrderFailed, order} = useSelector(store=>store.order);
  const{error} = useSelector(store=>store.error);
  const dispatch=useDispatch();
  React.useEffect(()=>{
     dispatch(getOrder(Number(id)));
  },[dispatch,id]
  )
  React.useEffect(()=>{
    
    if(getOrderFailed ) dispatch(setError("Не удалось загрузить данные заказа"));
    if(getOrderRequest) dispatch(clearError());
    
 },[dispatch,getOrderFailed,getOrderRequest]

)
return(  
    <div className={styles.window}>
    {order?
    (<main className={styles.main}>
      <section className={styles.section}>
     {order && <OrderDetailsExtended {...order} ></OrderDetailsExtended>}
        
      </section>
    </main>
    ):
    getOrderRequest?
    (
      <Awaiter/>
    ):
    (null)
}
{error && (
          <Modal
            header="Печалька :("
            onClose={() => dispatch(clearError())}
          >
            <span className="text text_type_main-medium">{`"${error}"`}</span>
          </Modal>
        )}
  </div>
)
}
