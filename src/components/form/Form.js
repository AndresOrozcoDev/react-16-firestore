import React, { useState } from 'react';
import './Form.css';

const Form = ({ onAddPlace }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const placeData = { name, category, location, code };

    try {
      await onAddPlace(placeData);
      setName('');
      setCategory('');
      setLocation('');
      setCode('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        className="input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <select
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>Select an option</option>
        <option value="restaurante">Restaurante</option>
        <option value="mirador">Mirador</option>
        <option value="rooftop">Roof top</option>
        <option value="parche">Parche</option>
      </select>
      <input
        type="number"
        placeholder="Code"
        className="input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <input
        className="btn"
        type="submit"
        value="Submit"
      />
    </form>
  )
}

export default Form;