import styles from "./feed.module.css";
import { useSelector, useDispatch } from "../utils/hooks";
import React from "react";
import OrdersReady from "../components/orders-info/orders-ready/orders-ready";
import OrderLists from "../components/orders-info/order-lists/order-lists";
import OrderCard from "../components/orders-info/order-card/order-card";
import { closeConnection, startConnection } from "../services/actions/ws";
import { TOrder } from "../utils/types";

export const FeedPage=()=>{
  const { orders,total, totalToday } = useSelector(store=>store.ws);
  const dispatch = useDispatch();
  React.useEffect(()=>{

     dispatch(startConnection(""));
return ()=>{ dispatch(closeConnection())}
  },[dispatch])

  var readyOrders = orders.filter(ord=>ord.status==="done").map(ord=> ord.number);
  var waitingOrders = orders.filter(ord=>ord.status==="pending"||ord.status==="created").map(ord=> ord.number);
  
return(
    <>
     <main className={styles.main}>
    
          <section className={`pl-9 mr-15 ${styles.section}`}>
          <p className="mt-10 mb-5 text text_type_main-large">Лента заказов</p>
          <section className={styles.scrollable}>
            {orders&& orders.map((order:TOrder, index:number)=>
            <OrderCard {...order} key={index} ></OrderCard>
            )}
          </section>
          </section>
          <div className="ml-10" />
          <section className={`mt-20 ${styles.section}`}>
          <OrderLists ready={readyOrders} waiting={waitingOrders}></OrderLists>
    <OrdersReady title="выполнено за все время:" quantity={total}></OrdersReady>
    <OrdersReady title="выполнено за сегодня:" quantity={totalToday}></OrdersReady>
    
          </section>
    
        
      </main>
    
    </>
);
};