import React from 'react';
import Table from 'react-bootstrap/Table';

const DragonsTable = (props) => {
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
                                    <td>{item.active}</td>
                                    <td>{item.crew_capacity}</td>
                                    <td>{item.description}</td>
                                    <td>{`Meters :- ${item.diameter.meters} , Feet :- ${item.diameter.feet}`}</td>
                                    <td>{item.dry_mass_kg}</td>
                                    <td>{item.dry_mass_lb}</td>
                                    <td>{item.first_flight}</td>
                                    <td>{item.flickr_images.map((images, _index) => {
                                        return (
                                            <>
                                                <div key={_index}>{_index + 1}</div>
                                                <div>{images}</div>
                                            </>
                                        )
                                    })}</td>
                                    <td>{`Dev partner:- ${item.dev_partner} , Material:- ${item.material} , Size meters :- ${item.size_meters} , Temperature :- ${item.temp_degrees}`}</td>
                                    <td>{`Meters:- ${item.height_w_trunk.meters} , Feet:- ${item.height_w_trunk.feet}`}</td>
                                    <td>{item.id}</td>
                                    <td>{`Kg.:- ${item.launch_payload_mass.kg} , lb.:- ${item.launch_payload_mass.lb}`}</td>
                                    <td>{`Cubic Feet:- ${item.launch_payload_vol.cubic_feet} , Cubic meters:- ${item.launch_payload_vol.cubic_meters}`}</td>
                                    <td>{item.name}</td>
                                    <td>{item.orbit_duration_yr}</td>
                                    <td>{`Cubic Feet:- ${item.pressurized_capsule.payload_volume.cubic_feet} , Cubic meters:- ${item.pressurized_capsule.payload_volume.cubic_meters}`}</td>
                                    <td>{`Return payload mass Kg.:- ${item.return_payload_mass.kg} , Return payload mass lb.:- ${item.return_payload_mass.lb}`}</td>
                                    <td>{`Return payload volume Cubic Feet:- ${item.return_payload_vol.cubic_feet} , Return payload volume Cubic meters:- ${item.return_payload_vol.cubic_meters}`}</td>
                                    <td>{item.sidewall_angle_deg}</td>
                                    <td>{item.thrusters.map((thruster, _index) => {
                                        return (
                                            <>
                                                <div key={_index}>{_index + 1}</div>
                                                <div>Amount :- {thruster.amount}</div>
                                                <div>Fuel 1 :- {thruster.fuel_1}</div>
                                                <div>Fuel 2 :- {thruster.fuel_2}</div>
                                                <div>ISP :- {thruster.isp}</div>
                                                <div>Pods :- {thruster.pods}</div>
                                                <div>Thrust :- {`${thruster.thrust.kN} , ${thruster.thrust.lbf}`}</div>
                                                <div>Type :- {thruster.type}</div>
                                            </>
                                        )
                                    })}</td>
                                    <td>{`Trunk cargo solar:-${item.trunk.cargo.solar_array} Trunk cargo unpressureized cargo :-${item.trunk.cargo.unpressurized_cargo}`}</td>
                                    <td>{item.type}</td>
                                    <td>{item.wikipedia}</td>
                                    <td>
                                        <button onClick={() => props.push('/dragons/details', { id: item.id })}>Details</button>
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

export default DragonsTable;


