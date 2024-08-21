import React, { Fragment } from 'react';
import './Table.css';

const Table = ({ data, onDelete }) => {

    const handleDelete = (id) => {
        onDelete(id);
    };

    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th className='ellipsis'>Name</th>
                        <th className='ellipsis'>Category</th>
                        <th className='ellipsis'>Location</th>
                        <th className='ellipsis'>Code</th>
                        <th className='ellipsis'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((place, index) => (
                        <tr key={index}>
                            <td className='ellipsis'>{place.name}</td>
                            <td className='ellipsis'>{place.category}</td>
                            <td className='ellipsis'>{place.location}</td>
                            <td className='ellipsis'>{place.code}</td>
                            <td onClick={() => handleDelete(place.id)}>X</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Table;