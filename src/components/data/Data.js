import React, { Fragment } from 'react';
import './Data.css';

const Data = ({ data, onDelete }) => {

    if (!data || data.length === 0) {
        return <p className='msg-error'>No se encontró información!</p>;
    }

    const handleDelete = (id) => {
        onDelete(id);
    };

    // Ordenar los datos por el campo `code` en orden ascendente
    const sortedData = data.sort((a, b) => a.code - b.code);

    return (
        <Fragment>
            {/* Vista en formato cards para mobile */}
            <div className='cards-container'>
                {sortedData.map((item) => (
                    <div key={item.id} className='card'>
                        <div className='card-header'>
                            <h3 className='ellipsis'>{item.name}</h3>
                            <span onClick={() => handleDelete(item.id)} title='Eliminar' className='btn-red'>X</span>
                        </div>
                        <div className='card-body'>
                            <p><strong>Categoria:</strong> {item.category}</p>
                            <p><strong>Ubicación:</strong> {item.location}</p>
                            <p><strong>Código:</strong> {item.code}</p>
                            <p>
                                <strong>Estado:</strong> 
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={item.status === "Conocido"}
                                        readOnly
                                    />
                                    <span className="slider"></span>
                                </label>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Vista en formato tabla para desktop */}
            <div className='content-table'>
                {!data || data.length === 0 ? (
                    <p className='msg-error'>No se encontró información!</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th className='ellipsis'>Nombre</th>
                                <th className='ellipsis'>Categoria</th>
                                <th className='ellipsis'>Ubicacion</th>
                                <th className='ellipsis'>Codigo</th>
                                <th className='ellipsis'>Estado</th>
                                <th className='ellipsis'>Opcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((item) => (
                                <tr key={item.id}>
                                    <td className='ellipsis'>{item.name}</td>
                                    <td className='ellipsis'>{item.category}</td>
                                    <td className='ellipsis'>{item.location}</td>
                                    <td className='ellipsis'>{item.code}</td>
                                    <td className='ellipsis'>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={item.status === "Conocido"}
                                                readOnly
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
                                    <td onClick={() => handleDelete(item.id)} title='Eliminar' className='btn-red'>X</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Fragment>
    );
};

export default Data;
