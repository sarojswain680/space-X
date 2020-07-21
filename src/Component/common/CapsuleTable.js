import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

const CapsuleTable = (props) => {
    return (
        <div className="auth-inner">
            <DropdownButton id="dropdown-basic-button" title="Capsules">
                <Dropdown.Item href="/capsules/upcoming">Upcoming Capsules</Dropdown.Item>
                <Dropdown.Item href="/capsules/past">Past Capsules</Dropdown.Item>
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
                                    <td>{item.capsule_id}</td>
                                    <td>{item.capsule_serial}</td>
                                    <td>{item.details}</td>
                                    <td>{item.landings}</td>
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
                                    <td>{item.status}</td>
                                    <td>{item.type}</td>
                                    <td>
                                        <button onClick={() => props.push('/capsules/details', { capsule_serial: item.capsule_serial })}>Details</button>
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

export default CapsuleTable;


