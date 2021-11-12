import React from 'react';
import styles from './burger-constructor.module.css'
import { DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import {ConstructorElement    } from '@ya.praktikum/react-developer-burger-ui-components';
class BurgerElement extends React.Component{
render(){
    return <div>
        {this.props.isLocked?<span className="pr-8"/>:<DragIcon />}
        <span className="pr-1"></span>
        <ConstructorElement {...this.props}/>
    </div>
}
}
export default BurgerElement;