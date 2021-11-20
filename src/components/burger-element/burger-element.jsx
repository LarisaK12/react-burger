import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-element.module.css';
import { DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import {ConstructorElement    } from '@ya.praktikum/react-developer-burger-ui-components';
function BurgerElement (props){
    
    return (
    
        <span className={styles.element}>
            {props.isLocked?<span className="pr-8"/>:<><DragIcon /><span className="pr-1"></span></>}
            
            <ConstructorElement {...props} />
        </span>
    
    )
}
BurgerElement.propTypes = {
    _id:PropTypes.string,
    type: PropTypes.string,
    isLocked:PropTypes.bool,
    text:PropTypes.string,
    price:PropTypes.number,
    thumbnail:PropTypes.string
 }
 
export default React.memo(BurgerElement);