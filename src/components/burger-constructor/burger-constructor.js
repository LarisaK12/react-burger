import React from 'react';
import styles from './burger-constructor.module.css';
import BurgerElement from './burger-element';
import {ConstructorElement , Button    } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
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
        },
        
        {
            "_id":"60666c42cc7b410027a1a9b3",
            "type": "undefined",
            "isLocked":false,            
            "text":"Филе Люминесцентного тетраодонтимформа",
            "price":988,
            "thumbnail":"https://code.s3.yandex.net/react/code/meat-03.png",
         },
        {
            "_id":"60666c42cc7b410027a1a9b5",
            "type": "undefined",
            "isLocked":false,
            "text":"Говяжий метеорит (отбивная)",
            "price":3000,
            "thumbnail":"https://code.s3.yandex.net/react/code/meat-04.png"
        },
        ,
        {
           "_id":"60666c42cc7b410027a1a9b3",
           "type": "undefined",
           "isLocked":false,            
           "text":"Филе Люминесцентного тетраодонтимформа",
           "price":988,
           "thumbnail":"https://code.s3.yandex.net/react/code/meat-03.png",
        },
        {
           "_id":"60666c42cc7b410027a1a9bf",
           "type": "undefined",
            "isLocked":false,
           "text":"Сыр с астероидной плесенью",
           "price":4142,
           "thumbnail":"https://code.s3.yandex.net/react/code/cheese.png",
        },
        {
            "_id":"60666c42cc7b410027a1a9b1",
            "type": "bottom",
            "isLocked":true,
            "text":"Краторная булка N-200i",
            "price":200,
            "thumbnail":"https://code.s3.yandex.net/react/code/bun-02.png"
    }
        ]
        ,
     visibleModal:false
    }
    
    // handleOpenModal=()=> {
    //     this.setState(function (prevState,props){return{...prevState, visibleModal: true }});
    //   }
    
    //     handleCloseModal=()=> {
    //     this.setState(function (prevState,props){return{...prevState, visibleModal: false }});
    //   }
render(){
    // const modal = (
    //     <Modal header="" onClose={this.handleCloseModal}> 
    //      </Modal>
    //   );
    return this.state.burger.length > 1 &&<> <div id="react-modals"/>
    <div className={styles.burger} onClick={this.handleOpenModal}>
            <BurgerElement {...this.state.burger[0]}></BurgerElement>
            <div className="pb-4"/>
            <div className={styles.scrollable}>
                {this.state.burger.filter(ingr=>ingr.type=='undefined').map((ingredient, index)=>
                <>
                <BurgerElement {...ingredient}></BurgerElement>
                <div className="pb-4"/>
                </>
                )}
            </div>
            <div className="pb-4"/>    
            <BurgerElement {...this.state.burger[this.state.burger.length-1]}></BurgerElement>
    </div></>
}

}
export default BurgerConstructor