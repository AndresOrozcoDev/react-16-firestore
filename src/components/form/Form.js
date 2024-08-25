import React, { useState, useRef } from 'react';
import './Form.css';


const Form = ({ onAddPlace }) => {

  const nameInputRef = useRef(null);
  const locationInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    code: '',
    status: 'nuevo',
  });


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
        status: 'nuevo',
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


  return (
    <form onSubmit={handleSubmit}>

      <input
        className="input"
        type="text"
        name="name"
        ref={nameInputRef}
        onInput={() => handleInput(nameInputRef)}
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        inputMode="text"
        autoComplete="off"
        required
      />

      <input
        className="input"
        type="text"
        name="location"
        ref={locationInputRef}
        onInput={() => handleInput(locationInputRef)}
        value={formData.location}
        onChange={handleChange}
        placeholder="Ubicacion"
        inputMode="text"
        autoComplete="off"
        required
      />

      <input
        className="input"
        type="text"
        name="code"
        value={formData.code}
        onChange={handleChange}
        placeholder="Codigo"
        inputMode="numeric"
        autoComplete="off"
        required
      />

      <select
        className="input"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Categoria</option>
        <option value="Restaurante">Restaurante</option>
        <option value="Mirador">Mirador</option>
        <option value="Rooftop">Roof top</option>
        <option value="Parche">Parche</option>
        <option value="Hotel">Hotel</option>
        <option value="Antojo">Antojo</option>
      </select>

      <div className='input-radio'>
        <input
          type="radio"
          id="nuevo"
          name="status"
          value="nuevo"
          onChange={handleChange}
          required
        />
        <label htmlFor="nuevo">Nuevo</label>
      </div>

      <div className='input-radio'>
        <input
          type="radio"
          id="conocido"
          name="status"
          value="conocido"
          onChange={handleChange}
          required
        />
        <label htmlFor="conocido">Conocido</label>
      </div>

      <input
        className="btn"
        type="submit"
        value="Agregar"
      />

    </form>
  )
}

export default Form;