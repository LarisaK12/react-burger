import styles from "./order-ingredients-list.module.css";
import React from "react";
import { TOrderIngredients,TIngredient } from "../../../utils/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../../utils/hooks";

const OrderIngredientsList:React.FC<TOrderIngredients>=(props)=>{
    const { ingredients } = useSelector((store) => store.ingredients);

    var selectedIngreients:Array<TIngredient&{cnt:number}>=[];
      props.ingredients.forEach(
          (i)=>{
              let ingr = ingredients.find((ingr)=>ingr._id===i)
          if(ingr){
            selectedIngreients.some(c=>c._id===i)?selectedIngreients[selectedIngreients.findIndex(c=>c._id===i)].cnt++:
            selectedIngreients.push({...ingr, cnt:1})
          }
        }
      )   
 
return(
    <div className={styles.scrollable}>
        
        {selectedIngreients && selectedIngreients.length>0 && selectedIngreients.map((ingr:TIngredient&{cnt:number}, index:number) => (
        <div className={styles.container} key={index}>
        
        <img src={ingr.image} className={`m-2 ${styles.item}`} alt={ingr.name}></img>
        <p className="m-2 text text_type_main-small" >{ingr.name}</p>       
        
        <span className={`m-2 ${styles.price_div}`}>
          <p className="text text_type_digits-default mr-2 ">
            {ingr.cnt}x{ingr.price}
          </p>
          <CurrencyIcon type="primary" />
        </span>

        </div>
        
        ))}
            
    </div>
)
}
export default OrderIngredientsList;