import React, { Fragment, useState, useEffect } from 'react';

import PlaceForm from '../components/PlaceForm';
import PlacesTable from '../components/PlacesTable';

import { getPlaces, addPlace } from '../services/Places';

const City = () => {
    const [places, setPlaces] = useState([]);

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

    // Cargar los lugares al montar el componente
    useEffect(() => {
        fetchPlaces();
    }, []);

    return (
        <Fragment>
            <PlaceForm onAddPlace={handleAddPlace} />
            <PlacesTable data={places} />
        </Fragment>
    )
}

export default City;