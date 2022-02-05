import styles from "./feed.module.css";
import { useSelector, useDispatch } from "../utils/hooks";
import React from "react";
import { useParams } from "react-router-dom";
import OrdersReady from "../components/orders-info/orders-ready/orders-ready";
import OrderLists from "../components/orders-info/order-lists/order-lists";
import OrderCard from "../components/orders-info/order-card/order-card";

export const FeedPage=()=>{
  let { id }:{id:string} = useParams();
  
return(
    <>
     <main className={styles.main}>
    
          <section className={`pl-9 mr-15 ${styles.section}`}>
          <p className="mt-10 mb-5 text text_type_main-large">Лента заказов{id}</p>
          <section className={styles.scrollable}>
          <OrderCard status="готов" createdAt={new Date()} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
          <OrderCard status={null} createdAt={new Date("02-03-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
          <OrderCard status="выполнен" createdAt={new Date("01-31-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
          <OrderCard status="готов" createdAt={new Date()} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
          <OrderCard status="готов" createdAt={new Date("02-03-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
          <OrderCard status="готов" createdAt={new Date("01-31-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
          </section>
          </section>
          <div className="ml-10" />
          <section className={`mt-20 ${styles.section}`}>
          <OrderLists ready={[11117899008776,2222,3333]} waiting={[4444,5555,6666,777]}></OrderLists>
    <OrdersReady title="выполнено за все время:" quantity={123456}></OrdersReady>
    <OrdersReady title="выполнено за сегодня:" quantity={123456}></OrdersReady>
    
          </section>
    
        
      </main>
    
    </>
);
};