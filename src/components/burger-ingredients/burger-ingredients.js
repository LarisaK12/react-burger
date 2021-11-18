import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import {Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsTab from '../burger-ingredients-tab/burger-ingredients-tab';
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
function BurgerIngredients (props){
    const [ingredients,setIngredients] =React.useState([]);
    const [currentTab, setCurrentTab] = React.useState('bun');
    React.useEffect(()=>{
        const element = document.getElementById(currentTab);
        element.scrollIntoView({behavior:'smooth'});
    },[currentTab])
    React.useEffect(()=>{
        setIngredients(props.ingredients);
    },[props])
         
    return (<div className={" pt-10"}>
    <p className="text text_type_main-large">Соберите бургер</p>
    <div className="mt-5 mb-10" style={{ display: 'flex' }}>
        <Tab value="bun" active={currentTab === 'bun'} onClick={()=>setCurrentTab('bun')}>
            Булки
        </Tab>
        <Tab value="sauce" active={currentTab === 'sauce'} onClick={()=>setCurrentTab('sauce')}>
            Соусы
        </Tab>
        <Tab value="main" active={currentTab === 'main'} onClick={()=>setCurrentTab('main')}>
            Начинки
        </Tab>
    </div>
    <div className={styles.ingredients}>
        <BurgerIngredientsTab id='bun' tabname='Булки' ingredients={ingredients.filter(ingredient=>ingredient.type==='bun')} ></BurgerIngredientsTab>
        <BurgerIngredientsTab id='sauce' tabname='Соусы' ingredients={ingredients.filter(ingredient=>ingredient.type==='sauce')}></BurgerIngredientsTab>
        <BurgerIngredientsTab id='main' tabname='Начинки' ingredients={ingredients.filter(ingredient=>ingredient.type==='main')}></BurgerIngredientsTab>
    </div>

    </div>
    )    
}
BurgerIngredients.propTypes = {
    ingredients:PropTypes.arrayOf(burgerIngredientPrpTypes.isRequired).isRequired
};
export default BurgerIngredients