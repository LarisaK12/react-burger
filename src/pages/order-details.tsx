import styles from "./order-details.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import OrderDetailsExtended from "../components/orders-info/order-details-extended/order-details-extended";
import { useSelector } from "../utils/hooks";
import { TOrder } from "../utils/types";

export const OrderDetailsPage= ()=>{
    let { id }:{id:string} = useParams();
  const order:TOrder|undefined = useSelector(store=>store.ws.orders.find(ord=>ord.number===Number( id)))
return(
    <>
    <main className={styles.main}>
      <section className={styles.section}>
     {order && <OrderDetailsExtended {...order} ></OrderDetailsExtended>}
        
      </section>
    </main>
  </>
)
}
