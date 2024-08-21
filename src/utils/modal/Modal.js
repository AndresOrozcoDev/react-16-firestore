import React from 'react';
import './Modal.css';


const Modal = ({ isOpen, onClose, children }) => {
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <span className="modal-close btn-red" onClick={onClose} title='Close'>X</span>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
