import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import HeaderItem from './app-header-item';
import {BurgerIcon, ListIcon ,ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader () {
  const [current,setCurrent]=React.useState("constructor");
   
  return (
    <nav className=" p-4 ">
      <div className={styles.header}>
          <HeaderItem text="конструктор" onClick={()=>setCurrent("constructor")}><BurgerIcon  type={current === 'constructor'?"primary" :"secondary"}/></HeaderItem>
          <HeaderItem text="лента заказов" onClick={()=>setCurrent("orders")}><ListIcon  type={current === 'orders'?"primary" :"secondary"}/></HeaderItem>
          <span className={styles.logo}><Logo /></span>
          <HeaderItem text="личный кабинет" onClick={()=>setCurrent("profile")}><ProfileIcon  type={current === 'profile'?"primary" :"secondary"}/></HeaderItem>
      </div>        
    </nav>
  );
}
export default AppHeader