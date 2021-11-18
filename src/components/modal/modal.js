import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import CloseImg from '../../images/close.svg'
function Modal (props) {
  const { children, header, onClose } = props;
  const modalRoot = document.getElementById("react-modals");
  const onKeydown = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  },[]);
  return (ReactDOM.createPortal(
      <div className={styles.background} onClick={onClose}>
        <div className={`pl-10 pt-10 pr-10 pb-15 ${styles.modal}`} onClick={e=>e.stopPropagation()}>
        <div className={styles.header}>
          <span className='text text_type_main-large'>{header}</span>
          <img className='ml-2' onClick={onClose}  src={CloseImg} alt='close'/>
        </div>
        {children}          
        </div>
      </div>,
      modalRoot
    )
  )  
} 
export default Modal