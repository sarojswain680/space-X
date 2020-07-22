import React from 'react';
import Table from 'react-bootstrap/Table';

const LandpadTable = (props) => {
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
                                    <td>{item.attempted_landings}</td>
                                    <td>{item.details}</td>
                                    <td>{item.full_name}</td>
                                    <td>{item.id}</td>
                                    <td>{item.landing_type}</td>
                                    <td>{`latitude :- ${item.location.latitude} , longitude :- ${item.location.longitude}, name :- ${item.location.name}, region:-${item.location.region}`}</td>
                                    <td>{item.status}</td>
                                    <td>{item.successful_landings}</td>
                                    <td>{item.wikipedia}</td>
                                    <td>
                                        <button onClick={() => props.push('/landing/details', { id: item.id })}>Details</button>
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

export default LandpadTable;


