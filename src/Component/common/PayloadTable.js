import React from 'react';
import Table from 'react-bootstrap/Table';

const PayloadTable = (props) => {
    return (
        <div className="auth-inner">
            <h3 className="header">{props.title}</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {props.header.map((item, index) => {
                            return (
                                <th>{item}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.customers}</td>
                                    <td>{item.manufacturer}</td>
                                    <td>{item.nationality}</td>
                                    <td>{item.norad_id}</td>
                                    <td>{item.orbit}</td>
                                    <td>{`apoapsis_km:-${item.orbit_params.apoapsis_km},inclination_deg:- ${item.orbit_params.inclination_deg},periapsis_km:- ${item.orbit_params.periapsis_km},reference_system:- ${item.orbit_params.reference_system},regime:- ${item.orbit_params.regime}`}</td>
                                    <td>{item.payload_id}</td>
                                    <td>{item.payload_mass_kg}</td>
                                    <td>{item.payload_mass_lbs}</td>
                                    <td>{item.payload_type}</td>
                                    <td>{item.reused ? "true" : "false"}</td>
                                    <td>
                                        <button onClick={() => props.push('/payloads/details', { id: item.payload_id })}>Details</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default PayloadTable;


