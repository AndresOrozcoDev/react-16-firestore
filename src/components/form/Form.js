import React, { useState, useRef, Fragment } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = ({ onAddPlace }) => {

  const nameInputRef = useRef(null);
  const locationInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    code: '',
    status: 'Nuevo',
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, category, location, code, status } = formData;
    try {
      await onAddPlace({ name, category, location, code, status });
      setFormData({
        name: '',
        category: '',
        location: '',
        code: '',
        status: 'Nuevo',
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleInput = (ref) => {
    if (ref.current.value.length > 0) {
      const capitalized = ref.current.value.charAt(0).toUpperCase() +
        ref.current.value.slice(1);
      ref.current.value = capitalized;
    }
  };

  // Función para manejar el cambio del toggle switch
  const handleToggleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: e.target.checked ? 'Conocido' : 'Nuevo',
    }));
  };


  return (
    <Fragment>

      <h2 className='banner'>Crear Lugar</h2>

      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label>Name: *</label>
          <input
            className="input"
            type="text"
            name="name"
            ref={nameInputRef}
            onInput={() => handleInput(nameInputRef)}
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese el nombre"
            inputMode="text"
            autoComplete="off"
            required
          />
        </div>

        <div className='form-group'>
          <label>Ubicación: *</label>
          <input
            className="input"
            type="text"
            name="location"
            ref={locationInputRef}
            onInput={() => handleInput(locationInputRef)}
            value={formData.location}
            onChange={handleChange}
            placeholder="Ingrese la ubicacion"
            inputMode="text"
            autoComplete="off"
            required
          />
        </div>

        <div className='form-group'>
          <label>Codigo: *</label>
          <select
            className="input"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona un codigo</option>
            <option value="1">1 - Top</option>
            <option value="2">2 - Medio</option>
            <option value="3">3 - Sencillo</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Categoria: *</label>
          <select
            className="input"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona una categoria</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Mirador">Mirador</option>
            <option value="Rooftop">Roof top</option>
            <option value="Parche">Parche</option>
            <option value="Hotel">Hotel</option>
            <option value="Antojo">Antojo</option>
          </select>
        </div>

        <div className='form-group'>
          <div className='toggle-switch'>
            <label>Estado: *</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={formData.status === 'Conocido'}
                onChange={handleToggleChange}
              />
              <span className="slider"></span>
            </label>
            <p className='msg'>{formData.status}</p> {/* Muestra "Nuevo" o "Conocido" */}
          </div>
        </div>

        <div className='container-opt'>
          <input
            className="btn btn-primary"
            type="submit"
            value="Agregar"
            title='Agregar'
          />
          <input
            className="btn btn-secondary"
            type="submit"
            onClick={goBack}
            value="Regresar"
            title='Regresar'
          />
        </div>

      </form>
    </Fragment>
  )
}

export default Form;