import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  render() {
    const { children, header, onClose } = this.props;
    const modalRoot = document.getElementById("react-modals");

    return (ReactDOM.createPortal(
      <>
        <div style={{position:'absolute', margin:'0 auto', border:'2px'}}>
          <div onClose={onClose}>{header}</div>
          {children}
        </div>
        <span onClose={onClose} />
      </>,
      modalRoot
    )
    )
  }
} 
export default Modal