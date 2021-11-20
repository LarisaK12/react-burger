import React from 'react';
import PropTypes from 'prop-types';
import styles from './modalOverlay.module.css'
function ModalOverlay({onClose, children}){
    return(
        <div id='modalOverlay' className={styles.background} onClick={onClose}>{children}</div>
    )
}
ModalOverlay.propTypes={
    children:PropTypes.element,
    onClose:PropTypes.func
    }
  
export default ModalOverlay;