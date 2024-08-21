import React, { Fragment, useState, useEffect } from 'react';
import '../App.css';

import Modal from '../utils/modal/Modal';
import Form from '../components/form/Form';
import Notify from '../utils/notify/Notify';
import Table from '../components/table/Table';

import { getPlaces, addPlace, deletePlace } from '../services/Places';


const City = () => {
    const [places, setPlaces] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });

    const openModal = () => { setIsModalOpen(true) };
    const closeModal = () => { setIsModalOpen(false) };

    const showNotify = (message, type) => {
        setNotify({
            isOpen: true,
            message: message,
            type: type
        });
    };

    const fetchPlaces = async () => {
        try {
            const placesData = await getPlaces();
            setPlaces(placesData);
        } catch (e) {
            console.error("Error fetching places: ", e);
        }
    };

    const handleAddPlace = async (placeData) => {
        try {
            await addPlace(placeData);
            await fetchPlaces(); // Recarga la lista después de agregar un nuevo lugar
            showNotify('Place added successfully', 'success');
        } catch (e) {
            console.error("Error adding place: ", e);
            showNotify('Error adding place', 'error');
        }
    };

    const handleDelete = async (id) => {
        try {
            await deletePlace(id);
            await fetchPlaces(); // Recarga la lista después de eliminar un lugar
            showNotify('Place deleted successfully', 'success');
        } catch (e) {
            console.error("Error deleting place: ", e);
            showNotify('Error deleting place', 'error');
        }
    };

    useEffect(() => {
        fetchPlaces();
    }, []);

    return (
        <Fragment>
            <div className='container'>
                <Form onAddPlace={handleAddPlace} />
                <Table data={places} onDelete={handleDelete} />
            </div>

            {/* <button className='btn' onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
            </Modal> */}

            <Notify
                isOpen={notify.isOpen}
                message={notify.message}
                type={notify.type}
                onClose={() => setNotify({ ...notify, isOpen: false })}
            />
        </Fragment>
    );
};

export default City;
