import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import HeaderItem from './app-header-item';
import {BurgerIcon, ListIcon ,ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader () {
  const [currentPage,setCurrentPage]=React.useState("constructor");
  const SetConstructor=()=>setCurrentPage("constructor");
  const SetOrders=()=>setCurrentPage("orders");
  const SetProfile=()=>setCurrentPage("profile");
  return (
    <nav className=" p-4 ">
      <div className={styles.header}>
          <HeaderItem text="конструктор" onClick={SetConstructor}><BurgerIcon  type={currentPage === 'constructor'?"primary" :"secondary"}/></HeaderItem>
          <HeaderItem text="лента заказов" onClick={SetOrders}><ListIcon  type={currentPage === 'orders'?"primary" :"secondary"}/></HeaderItem>
          <span className={styles.logo}><Logo /></span>
          <HeaderItem text="личный кабинет" onClick={SetProfile}><ProfileIcon  type={currentPage === 'profile'?"primary" :"secondary"}/></HeaderItem>
      </div>        
    </nav>
  );
}
export default AppHeader