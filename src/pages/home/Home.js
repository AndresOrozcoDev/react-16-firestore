import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

import Notify from '../../../src/utils/notify/Notify';
import Data from '../../../src/components/data/Data';

import { getPlaces, deletePlace } from '../../../src/services/Places';


const Home = () => {
    const [places, setPlaces] = useState([]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    // const openModal = () => { setIsModalOpen(true) };
    // const closeModal = () => { setIsModalOpen(false) };

    const showNotify = (message, type) => {
        setNotify({
            isOpen: true,
            message: message,
            type: type
        });
    };

    const toAdd = () => {
        navigate('add');
    };

    const fetchPlaces = async () => {
        setIsLoading(true);
        try {
            const placesData = await getPlaces();
            setPlaces(placesData);
            setFilteredPlaces(placesData); // Inicialmente, mostrar todos los lugares
        } catch (e) {
            console.error("Error fetching places: ", e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        setIsLoading(true);
        try {
            await deletePlace(id);
            await fetchPlaces();
            showNotify('Lugar eliminado satisfactoriamente.', 'success');
        } catch (e) {
            console.error("Error deleting place: ", e);
            showNotify('Hubo un error al momento de eliminar.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPlaces();
    }, []);

    useEffect(() => {
        // Filtrar lugares según el término de búsqueda
        const filtered = places.filter(place =>
            place.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPlaces(filtered);
    }, [searchTerm, places]); // Se ejecuta cada vez que cambia searchTerm o places


    return (
        <Fragment>

            {isLoading && (
                <div className="bg-loader">
                    <div className="loader-text">Loading...</div>
                </div>
            )}

            <h2 className='banner'>MEDELLIN</h2>

            <div className='container'>
                <div className='container container-form'>
                    <button 
                        className='btn btn-primary' 
                        onClick={toAdd} 
                        title='Agregar'
                    >Agregar lugar</button>
                    <input 
                        type='search' 
                        className='input'
                        placeholder='Buscar' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
                    />
                </div>
                <div className='container'>
                    <Data data={filteredPlaces} onDelete={handleDelete} />
                </div>
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

export default Home;
