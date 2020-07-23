import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { payloadDetails } from '../../Redux/Action/Payloads/index';

class PayloadDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.payloadDetails(this.props.location.state.id)
    }

    render() {
        const { loading, payload } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{payload.payload_id}</h3>
                            <div>customers :-{payload.customers}</div>
                            <div>manufacturer:-{payload.manufacturer}</div>
                            <div>nationality:-{payload.nationality}</div>
                            <div>norad_id:-{payload.norad_id}</div>
                            <div>orbit:-{payload.orbit}</div>
                            <div>{`apoapsis_km:-${payload && payload.orbit_params && payload.orbit_params.apoapsis_km},inclination_deg:- ${payload && payload.orbit_params && payload.orbit_params.inclination_deg},periapsis_km:- ${payload && payload.orbit_params && payload.orbit_params.periapsis_km},reference_system:- ${payload && payload.orbit_params && payload.orbit_params.reference_system},regime:- ${payload && payload.orbit_params && payload.orbit_params.regime}`}</div>
                            <div>payload_id:-{payload.payload_id}</div>
                            <div>payload_mass_kg:-{payload.payload_mass_kg}</div>
                            <div>payload_mass_lbs:-{payload.payload_mass_lbs}</div>
                            <div>payload_type:-{payload.payload_type}</div>
                            <div>reused:-{payload.reused ? "True" : "False"}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Payload }) => {
    const { loading, payload } = Payload;
    return { loading, payload };
}
const mapDispatchToProps = dispatch => {
    return {
        payloadDetails: (id) => {
            dispatch(payloadDetails(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PayloadDetails)  