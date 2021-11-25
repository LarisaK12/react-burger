import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css'
function ModalOverlay(props){
    return(
        <div id="modalOverlay" className={styles.background} onClick={props.onClick}>{props.children}</div>
    )
}
ModalOverlay.propTypes={
    children:PropTypes.element,
    onClose:PropTypes.func
    }
  
export default ModalOverlay;