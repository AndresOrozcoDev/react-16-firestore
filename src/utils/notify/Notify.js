import React, { useEffect } from 'react';
import './Notify.css'; // Opcional: para estilos

const Notify = ({ message, type = 'info', isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={`notification ${type}`}>
            <span>{message}</span>
            <button className="notification-close" onClick={onClose}>X</button>
        </div>
    );
};

export default Notify;
