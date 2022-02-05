import styles from "./profile-orders-data.module.css";
import OrderCard from "../orders-info/order-card/order-card";
const ProfileOrdersData=()=>{
return(

    <section className={styles.scrollable}>
        <span className="ml-6" >
    <OrderCard status="готов" createdAt={new Date()} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
    <OrderCard status={null} createdAt={new Date("02-03-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
    <OrderCard status="выполнен" createdAt={new Date("01-31-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
    <OrderCard status="готов" createdAt={new Date()} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
    <OrderCard status="готов" createdAt={new Date("02-03-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
    <OrderCard status="готов" createdAt={new Date("01-31-2022")} updatedAt={new Date()} ingredients={["60d3b41abdacab0026a733c7","60d3b41abdacab0026a733cd","60d3b41abdacab0026a733cb"]} id={1234} name={'заказ 12'}  ></OrderCard>
    </span>
    </section>
    
   
)
}
export default ProfileOrdersData;