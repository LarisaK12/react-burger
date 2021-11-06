import React from 'react';

import styles from './burger-ingredients.module.css';
import {Counter  ,CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
class BurgerIngredientCard extends React.Component{
    constructor(props){
        super(props);
    }
    
 render(){
    let counterLabel;
    if(this.props.counter)counterLabel = <Counter count={this.props.counter} size="default"/>
     return<div className="pb-5" style={{display:'flex', flexDirection:'column',width:'280px'}}>
         {counterLabel}
         <img src={this.props.ingredient.image} alt="img" style={{flex:'1 1 auto'}}/>
         <span style={{display:'flex', flexDirection:'row', flex:'1 1 auto', margin:'0 auto'}}><p className="text text_type_digits-default pr-3">{this.props.ingredient.price}</p>
         <CurrencyIcon type="primary" />
         </span>
     <p className="text text_type_main-small" style={{flex:'1 1 auto', margin:'0 auto'}}>{this.props.ingredient.name}</p>
     </div>
 }
}
export default BurgerIngredientCard;