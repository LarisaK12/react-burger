import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import BurgerElement from '../burger-element/burger-element';
import SubmitOrder from '../submit-order/submit-order';
//import Modal from '../modal/modal';
const burgerPropTypes = PropTypes.shape({
    _id:PropTypes.string,
    type: PropTypes.string,
    isLocked:PropTypes.bool,
    text:PropTypes.string,
    price:PropTypes.number,
    thumbnail:PropTypes.string
})
class BurgerConstructor extends React.Component {
    state={
        burger:[]
        ,
     visibleModal:false
    }
    constructor(props){
        super(props);
        this.state = {
            burger:props.burger,
            visibleModal:false,
        }
    }
    // handleOpenModal=()=> {
    //     this.setState((prevState,props)=>({...prevState, visibleModal: true }));
    //   }
    
    //     handleCloseModal=()=> {
    //     this.setState((prevState,props)=>({...prevState, visibleModal: false }));
    //   }
render(){
    // const modal = (
    //     <Modal header="" onClose={this.handleCloseModal}> 
    //      </Modal>
    //   );
    return (
        this.state.burger.length > 1 &&<>
    <div className={styles.burger} onClick={this.handleOpenModal}>
            <BurgerElement  {...this.state.burger[0]}></BurgerElement>
            <div className="pb-4"/>
            <div className={styles.scrollable}>
                {this.state.burger.filter(ingr=>ingr.type=='undefined').map((ingredient, index)=>
                <span key={index}>
                <BurgerElement {...ingredient}></BurgerElement>
                <div className="pb-4"/>
                </span>
                )}
                
            </div>
            <div className="pb-4"/>    
            <BurgerElement {...this.state.burger[this.state.burger.length-1]}></BurgerElement>
         
    </div>
    <div className='pt-10'></div>
    <SubmitOrder  price={this.state.burger.map(ingr=>ingr.price).reduce((s,price)=>s+price)}/>
    </>
    )
}

}
BurgerConstructor.propTypes = {
    burger: PropTypes.arrayOf(burgerPropTypes.isRequired)
  }; 
export default BurgerConstructor