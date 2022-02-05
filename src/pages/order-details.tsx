import styles from "./order-details.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import OrderDetailsExtended from "../components/orders-info/order-details-extended/order-details-extended";

export const OrderDetailsPage= ()=>{
    let { id }:{id:string} = useParams();
  //загрузить заказ из store
return(
    <>
    <main className={styles.main}>
      <section className={styles.section}>
     
         <OrderDetailsExtended status="выполнен" createdAt={new Date("01-31-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb","60d3b41abdacab0026a733cb","60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733cc","60d3b41abdacab0026a733ca","60d3b41abdacab0026a733d1","60d3b41abdacab0026a733c8"]} id={1234} name={'заказ 12'}  />
     
      </section>
    </main>
  </>
)
}
