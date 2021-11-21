import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import CloseImg from '../../images/close.svg'
import ModalOverlay from '../modalOverlay/modalOverlay';
function Modal (props) {
  const { children, header, onClose } = props;
  const modalRoot = document.getElementById("react-modals");
  const onKeydown = ({ key }) => {
    if(key ==='Escape') onClose()
  }
  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  },[]);
  return (ReactDOM.createPortal(
      <ModalOverlay onClick={onClose}>
        <div className={`pl-10 pt-10 pr-10 pb-15 ${styles.modal}`} onClick={e=>e.stopPropagation()}>
        <div className={styles.header}>
          <span className="text text_type_main-large">{header}</span>
          <img className="ml-2" onClick={onClose}  src={CloseImg} alt="закрыть"/>
        </div>
        {children}          
        </div>
      </ModalOverlay>,
      modalRoot
    )
  )  
} 
Modal.propTypes={
  children:PropTypes.element,
  header:PropTypes.string,
  onClose:PropTypes.func
  }
export default Modal