import React, { Fragment, useState, useEffect } from 'react';
import '../../App.css';

import Modal from '../../../src/utils/modal/Modal';
import Form from '../../../src/components/form/Form';
import Notify from '../../../src/utils/notify/Notify';
import Table from '../../../src/components/table/Table';

import { getPlaces, addPlace, deletePlace } from '../../../src/services/Places';


const Home = () => {
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);

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
            showNotify('Place added successfully', 'success');
        } catch (e) {
            console.error("Error adding place: ", e);
            showNotify('Error adding place', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <Fragment>
            <div className='container'>
                <Form onAddPlace={handleAddPlace}/>
            </div>
        </Fragment>
    )
};

export default Home;