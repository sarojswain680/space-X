import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

const CoresTable = (props) => {
    return (
        <div className="auth-inner">
            <DropdownButton id="dropdown-basic-button" title="Cores">
                <Dropdown.Item href="/cores/upcoming">Upcoming Cores</Dropdown.Item>
                <Dropdown.Item href="/cores/past">Past Cores</Dropdown.Item>
            </DropdownButton>
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
                                    <td>{item.asds_attempts}</td>
                                    <td>{item.asds_landings}</td>
                                    <td>{item.block}</td>
                                    <td>{item.core_serial}</td>
                                    <td>{item.details}</td>
                                    <td>{item.missions.map((mission, _index) => {
                                        return (
                                            <>
                                                <div key={_index}>{_index + 1}</div>
                                                <div >Name :- {mission.name}</div>
                                                <div>Name :- {mission.flight}</div>
                                            </>
                                        )
                                    })}</td>
                                    <td>{item.original_launch}</td>
                                    <td>{item.original_launch_unix}</td>
                                    <td>{item.reuse_count}</td>
                                    <td>{item.rtls_attempts}</td>
                                    <td>{item.rtls_landings}</td>
                                    <td>{item.status}</td>
                                    <td>{item.water_landing ? 'true' : 'false'}</td>
                                    <td>
                                        <button onClick={() => props.push('/cores/details', { cores_serial: item.core_serial })}>Details</button>
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

export default CoresTable;


