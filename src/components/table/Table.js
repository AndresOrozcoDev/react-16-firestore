import React, { Fragment } from 'react';
import './Table.css';


const Table = ({ data, onDelete }) => {

    if (!data || data.length === 0) { return <p className='msg-error'>No se encontro información!</p> }

    const handleDelete = (id) => { onDelete(id) }

    return (
        <Fragment>
            <div className='content-table'>
                {!data || data.length === 0 ? (
                    <p className='msg-error'>No se encontro información!</p>
                ) :
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
                            {data.map((place, index) => (
                                <tr key={index}>
                                    <td className='ellipsis'>{place.name}</td>
                                    <td className='ellipsis'>{place.category}</td>
                                    <td className='ellipsis'>{place.location}</td>
                                    <td className='ellipsis'>{place.code}</td>
                                    <td className='ellipsis'>{place.status}</td>
                                    <td onClick={() => handleDelete(place.id)} title='Eliminar' className='btn-red'>X</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </Fragment>
    )
}

export default Table;