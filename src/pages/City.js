import React, { Fragment, useState, useEffect } from 'react';
import '../App.css';

import Form from '../components/form/Form';
import Table from '../components/table/Table';
import Modal from '../utils/modal/Modal';
import Notify from '../utils/notify/Notify'

import { getPlaces, addPlace, deletePlace } from '../services/Places';

const City = () => {
    const [places, setPlaces] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const openModal = () => { setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); };
    const showNotification = () => { setIsNotificationOpen(true); };
    const closeNotification = () => { setIsNotificationOpen(false); };


    // Función para obtener los lugares
    const fetchPlaces = async () => {
        try {
            const placesData = await getPlaces();
            setPlaces(placesData);
        } catch (e) {
            console.error("Error fetching places: ", e);
        }
    };

    // Función para manejar el envío del formulario
    const handleAddPlace = async (placeData) => {
        try {
            await addPlace(placeData);
            await fetchPlaces(); // Recarga la lista después de agregar un nuevo lugar
        } catch (e) {
            console.error("Error adding place: ", e);
        }
    };

    // Funcion para eliminar un lugar
    const handleDelete = async (id) => {
        try {
            await deletePlace(id);
            await fetchPlaces(); // Recarga la lista después de agregar un nuevo lugar
        } catch (e) {
            console.error("Error adding place: ", e);
        }
    };

    // Cargar los lugares al montar el componente
    useEffect(() => {
        fetchPlaces();
    }, []);


    return (
        <Fragment>
            <Form onAddPlace={handleAddPlace} />
            <Table data={places} onDelete={handleDelete} />

            <button className='btn' onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
                <button className='btn' onClick={closeModal}>Close</button>
            </Modal>

            <button className='btn' onClick={showNotification}>Show Notification</button>
            <Notify
                isOpen={isNotificationOpen}
                onClose={closeNotification}
                message="This is an info notification!"
                type="info" // Puede ser 'info', 'success', 'warning', 'error'
            />

        </Fragment>
    )
}

export default City;