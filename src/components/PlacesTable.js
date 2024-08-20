import React, { Fragment } from 'react';

const PlacesTable = ({ data }) => {

    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((place, index) => (
                        <tr key={index}>
                            <td>{place.name}</td>
                            <td>{place.category}</td>
                            <td>{place.location}</td>
                            <td>{place.code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default PlacesTable;