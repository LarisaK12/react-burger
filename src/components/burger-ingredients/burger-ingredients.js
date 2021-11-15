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
class BurgerIngredients extends React.Component{
    state={
     ingredients:[],  
     current:'bun'
    };
    constructor(props){
       super(props);
       this.state={
          ingredients:props.ingredients,
          current:'bun'
       }
    }
    setCurrent=(value)=>{        
        this.setState((prevState)=>({...prevState,current:value}));
        const element = document.getElementById(value);
        element.scrollIntoView({behavior:'smooth'});
    }
    render(){      
        return (<div className={" pt-10"}>
        <p className="text text_type_main-large">Соберите бургер</p>
        <div className="mt-5 mb-10" style={{ display: 'flex' }}>
            <Tab value="bun" active={this.state.current === 'bun'} onClick={this.setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={this.state.current === 'sauce'} onClick={this.setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={this.state.current === 'main'} onClick={this.setCurrent}>
                Начинки
            </Tab>
        </div>
        <div className={styles.ingredients}>
            <BurgerIngredientsTab id='bun' tabname='Булки' ingredients={this.state.ingredients.filter(ingredient=>ingredient.type==='bun')} ></BurgerIngredientsTab>
            <BurgerIngredientsTab id='sauce' tabname='Соусы' ingredients={this.state.ingredients.filter(ingredient=>ingredient.type==='sauce')}></BurgerIngredientsTab>
            <BurgerIngredientsTab id='main' tabname='Начинки' ingredients={this.state.ingredients.filter(ingredient=>ingredient.type==='main')}></BurgerIngredientsTab>
        </div>

        </div>
        )
    }
}
BurgerIngredients.propTypes = {
    ingredients:PropTypes.arrayOf(burgerIngredientPrpTypes.isRequired).isRequired
};
export default BurgerIngredients