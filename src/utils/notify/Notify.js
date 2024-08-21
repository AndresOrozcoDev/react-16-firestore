import React, { useEffect } from 'react';
import './Notify.css';


const Notify = ({ isOpen, message, type, onClose }) => {
    
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
            {message}
        </div>
    );
};

export default Notify;
