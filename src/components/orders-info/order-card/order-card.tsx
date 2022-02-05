import React from "react";
import { TOrder } from "../../../utils/types";
import IngredientRow from "../ingredient-row/ingredient-row";
import styles from "./order-card.module.css";
import { dateToString } from "../../../utils/utils";
import { Link, useLocation } from "react-router-dom";
const OrderCard:React.FC<TOrder> = (props)=>{
    const location = useLocation();
    
return(
    <Link
      key={props.id}
      to={{
        pathname:  `${location.pathname}${location.pathname[location.pathname.length-1]==="/"?"":"/"}${props.id}`,
        state: { background: location },
      }}
      className={styles.link}
    >
<div className={`p-6 mt-3 mb-3 ${styles.card}`}>
    <div className={styles.row}><p className="text text_type_digits-default" >#{props.id}</p>
    <p className="text text_type_main-default text_color_inactive" >{dateToString(props.createdAt)}</p>
    </div>
    <p className="mt-6 mb-6 text text_type_main-medium">{props.name}</p>
    {props.status && <p className={`mt-2 mb-6 text text_type_main-small ${props.status==="выполнен"?styles.green:""}`}>{props.status}</p>}
    {props.ingredients && <IngredientRow  ingredients={props.ingredients} ></IngredientRow>}   
    
</div>
</Link>
)
}
export default OrderCard