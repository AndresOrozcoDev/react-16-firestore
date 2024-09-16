import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

import Form from '../../../src/components/form/Form';
import Notify from '../../../src/utils/notify/Notify';

import { addPlace } from '../../../src/services/Places';


const Add = () => {
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const showNotify = (message, type) => {
        setNotify({
            isOpen: true,
            message: message,
            type: type
        });
    };

    const handleAddPlace = async (placeData) => {
        setIsLoading(true);
        try {
            await addPlace(placeData);
            showNotify('Lugar agregado satisfactoriamente.', 'success');
            navigate('/');
        } catch (e) {
            console.error("Error adding place: ", e);
            showNotify('Hubo un error al momento de agregar.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Fragment>

            {isLoading && (
                <div className="bg-loader">
                    <div className="loader-text">Loading...</div>
                </div>
            )}

            <div className='container'>
                <Form onAddPlace={handleAddPlace} />
            </div>

            <Notify
                isOpen={notify.isOpen}
                message={notify.message}
                type={notify.type}
                onClose={() => setNotify({ ...notify, isOpen: false })}
            />

        </Fragment>
    )
};

export default Add;