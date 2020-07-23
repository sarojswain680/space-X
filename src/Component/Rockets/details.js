import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { rocketDetails } from '../../Redux/Action/Rockets/index';

class RocketsScreenDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.rocketDetails(this.props.location.state.id)
    }

    render() {
        const { loading, rocket } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{rocket.rocket_id}</h3>
                            <div>active :-{rocket.active ? "True" : "False"}</div>
                            <div>boosters:-{rocket.boosters}</div>
                            <div>company:-{rocket.company}</div>
                            <div>cost_per_launch:-{rocket.cost_per_launch}</div>
                            <div>country:-{rocket.country}</div>
                            <div>description:-{rocket.description}</div>
                            <div>diameter:-{`Meters:- ${rocket && rocket.diameter && rocket.diameter.meters}, Feet:- ${rocket && rocket.diameter && rocket.diameter.meters.feet}`}</div>
                            <div>first_flight:-{rocket.first_flight}</div>
                            <div>flickr_images:-{rocket.flickr_images}</div>
                            <div>id:-{rocket.id}</div>
                            <div>rocket_id:-{rocket.rocket_id}</div>
                            <div>rocket_name:-{rocket.rocket_name}</div>
                            <div>rocket_type:-{rocket.rocket_type}</div>
                            <div>stages:-{rocket.stages}</div>
                            <div>success_rate_pct:-{rocket.success_rate_pct}</div>
                            <div>wikipedia:-{rocket.wikipedia}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Rocket }) => {
    const { loading, rocket } = Rocket;
    return { loading, rocket };
}
const mapDispatchToProps = dispatch => {
    return {
        rocketDetails: (id) => {
            dispatch(rocketDetails(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RocketsScreenDetails)  