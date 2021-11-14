import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card';
import styles from './burger-ingredients-tab.module.css';
const burgerIngredientPrpTypes= PropTypes.shape(
    {
        _id:PropTypes.string,
        name:PropTypes.string,
        type:PropTypes.string,
        proteins:PropTypes.number,
        fat:PropTypes.number,
        carbohydrates:PropTypes.number,
        calories:PropTypes.number,
        price:PropTypes.number,
        image:PropTypes.string,
        image_mobile:PropTypes.string,
        image_large:PropTypes.string,
        __v:PropTypes.any
     });
function BurgerIngredientsTab (props){
 
    return (<>
        <p className="text text_type_main-medium pl-4 pt-6 pb-10" id={props.id}>{props.tabname}</p>
            {/*здесь надо еще количество звказанных ингредиентов передаавать*/}        
        <div className={styles.ingretients_tab}>
            {props.ingredients.map((ingredient, index)=>
            <BurgerIngredientCard key={ingredient._id}  ingredient={ingredient}></BurgerIngredientCard>
            )}
        </div> 
        </>
    )    
};
BurgerIngredientsTab.propTypes={
    ingredients:PropTypes.arrayOf(burgerIngredientPrpTypes.isRequired).isRequired
}
export default BurgerIngredientsTab
