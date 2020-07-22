import React from 'react';
import Table from 'react-bootstrap/Table';

const MissionTable = (props) => {
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
                                    <td>{item.description}</td>
                                    <td>{item.manufacturers}</td>
                                    <td>{item.mission_id}</td>
                                    <td>{item.mission_name}</td>
                                    <td>{item.payload_ids}</td>
                                    <td>{item.twitter}</td>
                                    <td>{item.website}</td>
                                    <td>{item.wikipedia}</td>
                                    <td>
                                        <button onClick={() => props.push('/missions/details', { id: item.mission_id })}>Details</button>
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

export default MissionTable;


