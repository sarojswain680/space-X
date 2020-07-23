import React from 'react';
import Table from 'react-bootstrap/Table';

const RocketTable = (props) => {
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
                                    <td>{item.active ? "True" : "False"}</td>
                                    <td>{item.boosters}</td>
                                    <td>{item.company}</td>
                                    <td>{item.cost_per_launch}</td>
                                    <td>{item.country}</td>
                                    <td>{item.description}</td>
                                    <td>{`Meters:- ${item.diameter.meters}, Feet:- ${item.diameter.feet}`}</td>
                                    <td>{item.first_flight}</td>
                                    <td>{item.flickr_images}</td>
                                    <td>{item.id}</td>
                                    <td>{item.rocket_id}</td>
                                    <td>{item.rocket_name}</td>
                                    <td>{item.rocket_type}</td>
                                    <td>{item.stages}</td>
                                    <td>{item.success_rate_pct}</td>
                                    <td>{item.wikipedia}</td>
                                    <td>
                                        <button onClick={() => props.push('/rockets/details', { id: item.rocket_id })}>Details</button>
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

export default RocketTable;


