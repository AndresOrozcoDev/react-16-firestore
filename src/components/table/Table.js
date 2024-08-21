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
                        <th>Name</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Code</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((place, index) => (
                        <tr key={index}>
                            <td>{place.name}</td>
                            <td>{place.category}</td>
                            <td>{place.location}</td>
                            <td>{place.code}</td>
                            <td onClick={() => handleDelete(place.id)}>X</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Table;