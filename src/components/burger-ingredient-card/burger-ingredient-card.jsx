import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredient-card.module.css';
import {Counter  ,CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
function BurgerIngredientCard (props){
    const [currentIngredientId, setCurrentIngredientId] =useState(null);
    const openModal=()=>{
        if(currentIngredientId)setCurrentIngredientId(null); 
        else setCurrentIngredientId(props.ingredient._id)
    }
    const closeModal=()=>setCurrentIngredientId(null);
     return(
         <>
     <div className={styles.ingredient_card}  onClick={openModal}>
         {props.counter &&  <Counter count={props.counter} size="default"/>}
         <img src={props.ingredient.image} className={`ml-4 mr-4 mb-1 ${styles.img}`} alt={props.ingredient.name} />         
         <span className={styles.price_div}>
            <p className="text text_type_digits-default mr-2 ">{props.ingredient.price}</p>
            <CurrencyIcon type="primary" />
         </span>
         <p className={`text text_type_main-small mt-1 ${styles.item_center}`} >{props.ingredient.name}</p>
         
     </div>
     {currentIngredientId &&
             <Modal onClose={closeModal} header='Детали ингредиента'  > 
             <IngredientDetails ingredient={props.ingredient}/>                 
             </Modal>}        
     </>
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
BurgerIngredientCard.propTypes= {
        ingredient:ingredientPropTypes,
        counter:PropTypes.number
     };

export default BurgerIngredientCard;