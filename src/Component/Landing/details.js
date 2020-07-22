import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { landpadDetails } from '../../Redux/Action/LandPad/index';

class LandpadDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.landpadDetails(this.props.location.state.id)
    }

    render() {
        const { loading, landpad } = this.props;
        console.log('sdvsdvdfvd', landpad)
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{landpad.full_name}</h3>
                            <div>attempted_landings :-{landpad.attempted_landings}</div>
                            <div>details:-{landpad.details}</div>
                            <div>full_name:-{landpad.full_name}</div>
                            <div>id:-{landpad.id}</div>
                            <div>landing_type:-{landpad.landing_type}</div>
                            <div>location:-{`latitude :- ${landpad && landpad.location && landpad.location.latitude} , longitude :- ${landpad && landpad.location && landpad.location.longitude}, name :- ${landpad && landpad.location && landpad.location.name}, region:-${landpad && landpad.location && landpad.location.region}`}</div>
                            <div>status:-{landpad.status}</div>
                            <div>successful_landings:-{landpad.successful_landings}</div>
                            <div>wikipedia:-{landpad.wikipedia}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Landpad }) => {
    const { loading, landpad } = Landpad;
    return { loading, landpad };
}
const mapDispatchToProps = dispatch => {
    return {
        landpadDetails: (id) => {
            dispatch(landpadDetails(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandpadDetails)  