import React from 'react';
import styles from './burger-ingredients.module.css';
import {Counter  ,CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
class BurgerIngredientCard extends React.Component{
    state={
        currentIngredientId:null
    }
    constructor(props){
        super(props);
    }
    ingredientClick=()=>{
        this.setState({
            currentIngredientId :this.props.ingredient._id
        })
    }
 render(){
    let counterLabel;
    if(this.props.counter)counterLabel = <Counter count={this.props.counter} size="default"/>
     return<div className={styles.ingredient_card}  onClick={this.ingredientClick}>
         {counterLabel}
         <img src={this.props.ingredient.image} className="ml-4 mr-4 mb-1" alt="img" />
         
         <span className={styles.price_div}><p className="text text_type_digits-default ">{this.props.ingredient.price}</p>
         <CurrencyIcon type="primary" />
         </span>
      <span className={styles.item_center}>   
     <p className="text text_type_main-small mt-1" >{this.props.ingredient.name}</p>
     </span>
     </div>
 }
}
export default BurgerIngredientCard;