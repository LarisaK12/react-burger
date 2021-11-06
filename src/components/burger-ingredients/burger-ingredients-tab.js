import React from 'react';
import BurgerIngredientCard from './burger-ingredient-card';
import BurgerIngredients from './burger-ingredients';
//import {Counter  ,CurrencyIcon ,DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
class BurgerIngredientsTab extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return  <>
        <p className="text text_type_main-medium">{this.props.tabname}</p>   
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {this.props.ingredients.map((ingredient, index)=>
            <BurgerIngredientCard key={ingredient._id}  ingredient={ingredient}></BurgerIngredientCard>
            )}
        </div> 
        </>
    }
};
export default BurgerIngredientsTab
