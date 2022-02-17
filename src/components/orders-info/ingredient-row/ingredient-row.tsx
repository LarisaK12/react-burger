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
    const visibleIngredientsNumber = 6;
    
return(
    <div className={styles.main} >
<div className={styles.img_container} style={{padding:`0  ${36*(props.ingredients.length-1)}px 0 0`}} >
   {selectedIngreients&& selectedIngreients.slice(0,visibleIngredientsNumber).map((ingr:TIngredient, index:number)=>
   (       
       <img key={index} src={ingr.image} className={styles.item} style={{margin:`0 0 0 ${index*36}px`}} alt={ingr.name}></img>
    )
   )} 
  {selectedIngreients&& selectedIngreients.length> visibleIngredientsNumber &&
   <div className={`${styles.transparent} text text_type_digits-default `} style={{margin:`0 0 0 ${(visibleIngredientsNumber-1)*36}px`}} >
       +{selectedIngreients.length-visibleIngredientsNumber}</div>}
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