import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card';
import styles from './burger-ingredients-tab.module.css';
import { IngredientsContext } from '../../utils/appContext';

function BurgerIngredientsTab (props){
    
    const {ingredients} = React.useContext(IngredientsContext);
    const filteredIngredients = ingredients.filter(ingredient=>ingredient.type=== props.id);
    return (<>
        <p className="text text_type_main-medium pl-4 pt-6 pb-10" id={props.id}>{props.tabname}</p>
            {/*здесь надо еще количество звказанных ингредиентов передаавать*/}        
        <div className={styles.ingretients_tab}>
            {filteredIngredients.map((ingredient, index)=>
            <BurgerIngredientCard key={ingredient._id}  ingredient={ingredient}></BurgerIngredientCard>
            )}
        </div> 
        </>
    )    
};
BurgerIngredientsTab.propTypes={
    id:PropTypes.string.isRequired,
    tabname:PropTypes.string.isRequired,
}
export default BurgerIngredientsTab
