import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import HeaderItem from './app-header-item';
import {BurgerIcon, ListIcon ,ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
class AppHeader extends React.Component {
    state = { current: "constructor" };
    
    setCurrent=(value)=>{
      
      this.setState({current:value});
    }
    setOrder=()=>this.setCurrent("orders");
    setConstructor=()=>this.setCurrent("constructor");
    setProfile=()=>this.setCurrent("profile");
      render() {
        return (
        <nav className=" p-4 ">
          <div className={styles.header}>
              <HeaderItem text="конструктор" onClick={this.setConstructor}><BurgerIcon  type={this.state.current === 'constructor'?"primary" :"secondary"}/></HeaderItem>
              <HeaderItem text="лента заказов" onClick={this.setOrder}><ListIcon  type={this.state.current === 'orders'?"primary" :"secondary"}/></HeaderItem>
              <span className={styles.logo}><Logo /></span>
              <HeaderItem text="личный кабинет" onClick={this.setProfile}><ProfileIcon  type={this.state.current === 'profile'?"primary" :"secondary"}/></HeaderItem>
          </div>        
        </nav>
        );
      }
}
export default AppHeader