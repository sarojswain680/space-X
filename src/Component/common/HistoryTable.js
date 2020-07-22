import React from 'react';
import Table from 'react-bootstrap/Table';

const HistoryTable = (props) => {
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
                                    <td>{item.details}</td>
                                    <td>{item.event_date_unix}</td>
                                    <td>{item.event_date_utc}</td>
                                    <td>{item.flight_number}</td>
                                    <td>{item.id}</td>
                                    <td>{`Article :- ${item.links.article} , Reddit :- ${item.links.reddit}, wikipedia :- ${item.links.wikipedia}`}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <button onClick={() => props.push('/history/details', { id: item.id })}>Details</button>
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

export default HistoryTable;


