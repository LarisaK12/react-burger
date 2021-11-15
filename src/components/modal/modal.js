import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import CloseImg from '../../images/close.svg'
class Modal extends React.Component {
  render() {
    const { children, header, onClose } = this.props;
    const modalRoot = document.getElementById("react-modals");
    return (modalRoot.innerHTML.length>0?null:ReactDOM.createPortal(
      <>
        <div className={`pl-10 pt-10 pr-10 pb-15 ${styles.modal}`}>
        <div className={styles.header}>
          <span className='text text_type_main-large'>{header}</span>
          <img className='ml-2' onClick={onClose}  src={CloseImg} alt='close'/>
        </div>
        {children}
          
        </div>
      </>,
      modalRoot
    )
    )
  }
} 
export default Modal