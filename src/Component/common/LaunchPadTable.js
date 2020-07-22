import React from 'react';
import Table from 'react-bootstrap/Table';

const LaunchpadTable = (props) => {
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
                                    <td>{item.attempted_launches}</td>
                                    <td>{item.details}</td>
                                    <td>{item.id}</td>
                                    <td>{`latitude :- ${item.location.latitude} , longitude :- ${item.location.longitude}, name :- ${item.location.name}, region:-${item.location.region}`}</td>
                                    <td>{item.name}</td>
                                    <td>{item.site_id}</td>
                                    <td>{item.site_name_long}</td>
                                    <td>{item.status}</td>
                                    <td>{item.successful_launches}</td>
                                    <td>{item.vehicles_launched}</td>
                                    <td>{item.wikipedia}</td>
                                    <td>
                                        <button onClick={() => props.push('/launchpad/details', { id: item.site_id })}>Details</button>
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

export default LaunchpadTable;


