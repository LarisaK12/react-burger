import React from 'react';
import styles from './burger-ingredients.module.css';
import {Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsTab from '../burger-ingredients-tab/burger-ingredients-tab';

function BurgerIngredients (){
    const [currentTab, setCurrentTab] = React.useState('bun');
    React.useEffect(()=>{
        const element = document.getElementById(currentTab);
        element.scrollIntoView({behavior:'smooth'});
    },[currentTab])
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
        <BurgerIngredientsTab id="bun" tabname="Булки"  ></BurgerIngredientsTab>
        <BurgerIngredientsTab id="sauce" tabname="Соусы" ></BurgerIngredientsTab>
        <BurgerIngredientsTab id="main" tabname="Начинки" ></BurgerIngredientsTab>
    </div>

    </div>
    )    
}
export default BurgerIngredients