import React from "react";
import { useSelector } from "../../../utils/hooks";
import { TIngredient, TOrderIngredients } from "../../../utils/types";
import styles from "./ingredient-row.module.css";
import { useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientRow:React.FC<TOrderIngredients> = (props)=>{
    const { ingredients } = useSelector((store) => store.ingredients);
    const selectedIngreients = useMemo(()=>{
    var si:Array<TIngredient>=[];
      props.ingredients.forEach(
          (i)=>{
              let ingr = ingredients.find((ingr)=>ingr._id===i)
              if(ingr) si.push({...ingr})
          }        
      ) ;
      return si;
        },[props,ingredients]  
    )
    const price = useMemo(()=>selectedIngreients.length === 0?0: selectedIngreients.map((ingr)=>ingr.price).reduce((s,price)=>s+price),[selectedIngreients]);
    
return(
    <div className={styles.main} >
<div className={styles.img_container} style={{padding:`0 0 0 ${36*(props.ingredients.length-1)}px`}} >
   {selectedIngreients&& selectedIngreients.map((ingr:TIngredient, index:number)=>
   (       
       <img key={index} src={ingr.image} className={styles.item} style={{margin:`0 0 0 ${index*36*-1}px`}} alt={ingr.name}></img>
    )
   )} 
</div>

<span className={styles.price_div}>
          <p className="text text_type_digits-default mr-2 ">
            {price}
          </p>
          <CurrencyIcon type="primary" />
    </span>
    
</div>
)
}
export default IngredientRow