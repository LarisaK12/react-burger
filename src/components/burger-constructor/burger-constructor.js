import React from 'react';
import styles from './burger-constructor.module.css'
import {CurrencyIcon , LockIcon  ,DeleteIcon ,DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import {ConstructorElement , Button    } from '@ya.praktikum/react-developer-burger-ui-components';

class BurgerConstructor extends React.Component {
    state={
        burger:[
            {
                "_id":"60666c42cc7b410027a1a9b1",
                "type": "top",
                "isLocked":true,
                "text":"Краторная булка N-200i",
                "price":200,
                "thumbnail":"https://code.s3.yandex.net/react/code/bun-02.png"
        }
        ]
    }
render(){
    
    return <div className={styles.burger}>

<ConstructorElement
       {...this.state.burger[0]}
      />
     
    </div>
}

}
export default BurgerConstructor