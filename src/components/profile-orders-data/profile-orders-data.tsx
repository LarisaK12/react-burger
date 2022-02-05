import styles from "./profile-orders-data.module.css";
import OrderCard from "../orders-info/order-card/order-card";
import { useSelector } from "../../utils/hooks";
import { TOrder } from "../../utils/types";
const ProfileOrdersData=()=>{
    const { orders } = useSelector(store=>store.ws);
  
return(

    <section className={styles.scrollable}>
        <span className="ml-6" >
        {orders && orders.length>0 ? orders.map((order:TOrder, index:number)=>
            <OrderCard {...order} key={index} ></OrderCard>
        ):(
            <p className="mb-6  text text_type_main-medium">Заказов пока нет</p>
        )
        }
    </span>
    </section>
    
   
)
}
export default ProfileOrdersData;