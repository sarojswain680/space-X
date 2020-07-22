import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { dragonDetails } from '../../Redux/Action/Dragons/index';

class DragonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        console.log('vvdvdfvdrfvrdf', this.props.location.state)
        this.props.dragonDetails(this.props.location.state.id)
    }

    render() {
        const { loading, dragon } = this.props;
        console.log('sdvsdvdfvd', dragon)
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{dragon.id}</h3>
                            <div>active :-{dragon.active ? "True" : "False"}</div>
                            <div>crew_capacity:-{dragon.crew_capacity}</div>
                            <div>description:-{dragon.description}</div>
                            <div>diameter:-{`Meters :- ${dragon && dragon.diameter && dragon.diameter.meters} , Feet :- ${dragon && dragon.diameter && dragon.diameter.feet}`}</div>
                            <div>dry_mass_kg:-{dragon.dry_mass_kg}</div>
                            <div>dry_mass_lb:-{dragon.dry_mass_lb}</div>
                            <div>first_flight:-{dragon.first_flight}</div>
                            <div>flickr_images:-{dragon && dragon.flickr_images && dragon.flickr_images.map((images, _index) => {
                                return (
                                    <>
                                        <div key={_index}>{_index + 1}</div>
                                        <div>{images}</div>
                                    </>
                                )
                            })}</div>
                            <div>heat_shield :-{`Dev partner:- ${dragon.dev_partner} , Material:- ${dragon.material} , Size meters :- ${dragon.size_meters} , Temperature :- ${dragon.temp_degrees}`}</div>
                            <div>height_w_trunk:-{`Meters:- ${dragon && dragon.height_w_trunk && dragon.height_w_trunk.meters} , Feet:- ${dragon && dragon.height_w_trunk && dragon.height_w_trunk.feet}`}</div>
                            <div>id:-{dragon.id}</div>
                            <div>launch_payload_mass:-{`Kg.:- ${dragon && dragon.launch_payload_mass && dragon.launch_payload_mass.kg} , lb.:- ${dragon && dragon.launch_payload_mass && dragon.launch_payload_mass.lb}`}</div>
                            <div>launch_payload_vol:-{`Cubic Feet:- ${dragon && dragon.launch_payload_vol && dragon.launch_payload_vol.cubic_feet} , Cubic meters:- ${dragon && dragon.launch_payload_vol && dragon.launch_payload_vol.cubic_meters}`}</div>
                            <div>name:-{dragon.name}</div>
                            <div>orbit_duration_yr:-{dragon.orbit_duration_yr}</div>
                            <div>pressurized_capsule:-{`Cubic Feet:- ${dragon && dragon.pressurized_capsule && dragon.pressurized_capsule.payload_volume && dragon.pressurized_capsule.payload_volume.cubic_feet} , Cubic meters:- ${dragon && dragon.pressurized_capsule && dragon.pressurized_capsule.payload_volume && dragon.pressurized_capsule.payload_volume.cubic_meters}`}</div>
                            <div>return_payload_mass:-{`Return payload mass Kg.:- ${dragon && dragon.return_payload_mass && dragon.return_payload_mass.kg} , Return payload mass lb.:- ${dragon && dragon.return_payload_mass && dragon.return_payload_mass.lb}`}</div>
                            <div>return_payload_vol:-{`Return payload volume Cubic Feet:- ${dragon && dragon.return_payload_vol && dragon.return_payload_vol.cubic_feet} , Return payload volume Cubic meters:- ${dragon && dragon.return_payload_vol && dragon.return_payload_vol.cubic_meters}`}</div>
                            <div>sidewall_angle_deg:-{dragon.sidewall_angle_deg}</div>
                            <div>thrusters:-{dragon && dragon.thrusters && dragon.thrusters.map((thruster, _index) => {
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
                            })}</div>
                            <div>trunk:-{`Trunk cargo solar:-${dragon && dragon.trunk && dragon.trunk.cargo && dragon.trunk.cargo.solar_array} Trunk cargo unpressureized cargo :-${dragon && dragon.trunk && dragon.trunk.cargo && dragon.trunk.cargo.unpressurized_cargo}`}</div>
                            <div>type:-{dragon.type}</div>
                            <div>wikipedia:-{dragon.wikipedia}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Dragons }) => {
    const { loading, dragon } = Dragons;
    return { loading, dragon };
}
const mapDispatchToProps = dispatch => {
    return {
        dragonDetails: (id) => {
            dispatch(dragonDetails(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DragonDetails)  