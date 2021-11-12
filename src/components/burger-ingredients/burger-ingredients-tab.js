import React from 'react';
import BurgerIngredientCard from './burger-ingredient-card';
import styles from './burger-ingredients.module.css';

class BurgerIngredientsTab extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return  <>
        <p className="text text_type_main-medium pl-4 pt-6 pb-10" id={this.props.id}>{this.props.tabname}</p>
        
        <div className={styles.ingretients_tab}>
            {this.props.ingredients.map((ingredient, index)=>
            <BurgerIngredientCard key={ingredient._id}  ingredient={ingredient}></BurgerIngredientCard>
            )}
        </div> 
        </>
    }
};
export default BurgerIngredientsTab
