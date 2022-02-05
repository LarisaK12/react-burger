import styles from "./order-details-extended.module.css";
import React, {useMemo} from "react";
import OrderIngredientsList from "../order-ingredients-list/order-ingredients-list";
import { TOrder } from "../../../utils/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../../utils/hooks";
import { dateToString } from "../../../utils/utils";
import {TIngredient} from "../../../utils/types";

const OrderDetailsExtended:React.FC<TOrder> = (props)=>{
    const { ingredients } = useSelector((store) => store.ingredients);
    
    var selectedIngreients:Array<TIngredient>=[];
      props.ingredients.forEach(
          (i)=>{
              let ingr = ingredients.find((ingr)=>ingr._id===i)
              if(ingr) selectedIngreients.push({...ingr})
          }        
      )   
 
    const price = useMemo(()=>selectedIngreients.length === 0?0: selectedIngreients.map((ingr)=>ingr.price).reduce((s,price)=>s+price),[selectedIngreients]);
    
return(
    <div className={styles.main}>
    <p className="mt-20 text text_type_digits-default" >#{props.number}</p>
    <p className="mb-6 mt-6  text text_type_main-medium">{props.name}</p>
    <p className={`mt-3 mb-6 text text_type_main-small ${props.status==="done"?styles.green:""}`}>{props.status==="done"?"готов":props.status}</p>    
    <p className="mb-6 mt-3  text text_type_main-default">Состав:</p>
    <OrderIngredientsList ingredients={props.ingredients} />
    <div className={`${styles.horizontal} mt-6`}>
    <p className="mb-6  text text_type_main-small text_color_inactive">{dateToString(props.createdAt)}</p>
    
    <span className={styles.price_div}>
          <p className="text text_type_digits-default mr-2 ">
            {price}
          </p>
          <CurrencyIcon type="primary" />
        </span>
        </div>
    </div>
)
}
export default OrderDetailsExtended;