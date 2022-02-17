import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import CloseImg from '../../images/close.svg'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { TModalProps } from '../../utils/types';
const  Modal:React.FC<TModalProps> = (props) => {
  const { children, header, onClose } = props;
  const modalRoot:Element|null = document.getElementById("react-modals");
  const onKeydown = ({ key }:{key:string}) => {
    if(key ==='Escape') onClose()
  }
  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (modalRoot?ReactDOM.createPortal(
      <ModalOverlay onClose={onClose}>
        <div className={`pl-10 pt-10 pr-10 pb-15 ${styles.modal}`} onClick={e=>e.stopPropagation()}>
        <div className={styles.header}>
          <span className="text text_type_main-large">{header}</span>
          <img className="ml-2" onClick={onClose}  src={CloseImg} alt="закрыть" id="closeButton"/>
        </div>
        {children}          
        </div>
      </ModalOverlay>,
      modalRoot
    )
    : null
  )  
} 
export default Modal