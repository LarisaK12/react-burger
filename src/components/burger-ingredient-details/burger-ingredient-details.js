import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredient-details.module.css';
function BurgerIngredientDetails(props){
return(
    <div className={`${styles.main} ${styles.flexcol}`}>
        <img src={props.ingredient.image_large} alt={props.ingredient.name}></img>
        <p className='text text_type_main-medium pt-4 pb-8'>{props.ingredient.name}</p>
        <div className={`text text_type_main-small text_color_inactive ${styles.flexrow}`}>
        <div className={styles.flexcol}>
            <p>Калории, ккал</p>
            <p>{props.ingredient.calories}</p>
        </div>
        <div className='pl-5'></div>
        <div className={styles.flexcol}>
            <p>Белки, г</p>
            <p>{props.ingredient.proteins}</p>
        </div>
        <div className='pl-5'></div>
        <div className={styles.flexcol}>
            <p>Жиры, г</p>
            <p>{props.ingredient.fat}</p>
        </div>
        <div className='pl-5'></div>
        <div className={styles.flexcol}>
            <p>Углеводы, г</p>
            <p>{props.ingredient.carbohydrates}</p>
        </div>
        </div>
    </div>
)
}
const ingredientPropTypes = PropTypes.shape({
    
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
})

BurgerIngredientDetails.propTypes={
ingredient:ingredientPropTypes
}
export default BurgerIngredientDetails;