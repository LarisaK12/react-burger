import React from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById("react-modals");

class Modal extends React.Component {
  render() {
    const { children, header, onClose } = this.props;

    return ReactDOM.createPortal(
      <>
        <div style={{position:'absolute', margin:'0 auto'}}>
          <div onClose={onClose}>{header}</div>
          {children}
        </div>
        <span onClose={onClose} />
      </>,
      modalRoot
    );
  }
} 
export default Modal