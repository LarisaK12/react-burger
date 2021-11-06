import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
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
        return <nav className={styles.header+ " p-5 "}>
              
        <div className={styles.nav}>  
      <span className={" p-3 text text_type_main-default "} onClick={this.setConstructor}>
      <nobr className={styles.nav}><BurgerIcon  type={this.state.current === 'constructor'?"primary" :"secondary"}/>
      конструктор</nobr>
      </span>     
           
      <span  className={" p-3 text text_type_main-default "} onClick={this.setOrder}>
      <nobr className={styles.nav}> <ListIcon type={this.state.current === 'orders'?"primary" :"secondary"} />
      лента заказов</nobr>
      </span>
      
      </div>
      <Logo className={styles.logo}/>
      
            
      <span  className={" p-3 text text_type_main-default "+styles.nav}  onClick={this.setProfile}>
      <nobr className={styles.nav}><ProfileIcon type={this.state.current === 'profile'?"primary" :"secondary"} />
      личный кабинет</nobr>
      </span>
      
    
            
          
        </nav>;
      }
}
export default AppHeader