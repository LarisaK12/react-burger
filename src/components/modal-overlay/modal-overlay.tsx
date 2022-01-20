import React from 'react';
import styles from './modal-overlay.module.css'
import { TModalProps } from '../../utils/types';

const  ModalOverlay:React.FC<TModalProps> = (props) => {
    return(
        <div id="modalOverlay" className={styles.background} onClick={props.onClose}>{props.children}</div>
    )
}
  
export default ModalOverlay;