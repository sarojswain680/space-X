import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestRoadster } from '../../Redux/Action/Roadster/index';

class RoadsterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestRoadster()
    }

    render() {
        const { loading, roadster } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{roadster.name}</h3>
                            <div>apoapsis_au :-  {roadster.apoapsis_au}</div>
                            <div>details:-  {roadster.details}</div>
                            <div>earth_distance_km:-  {roadster.earth_distance_km}</div>
                            <div>earth_distance_mi:-  {roadster.earth_distance_mi}</div>
                            <div>eccentricity:-  {roadster.eccentricity}</div>
                            <div>epoch_jd:-  {roadster.epoch_jd}</div>
                            <div>flickr_images:-  {roadster.flickr_images}</div>
                            <div>inclination:-  {roadster.inclination}</div>
                            <div>launch_date_unix:-  {roadster.launch_date_unix}</div>
                            <div>launch_date_utc:-  {roadster.launch_date_utc}</div>
                            <div>launch_mass_kg :-  {roadster.launch_mass_kg}</div>
                            <div>launch_mass_lbs:-  {roadster.launch_mass_lbs}</div>
                            <div>longitude:-  {roadster.longitude}</div>
                            <div>mars_distance_km:-  {roadster.mars_distance_km}</div>
                            <div>mars_distance_mi:-  {roadster.mars_distance_mi}</div>
                            <div>name:-  {roadster.name}</div>
                            <div>norad_id:-  {roadster.norad_id}</div>
                            <div>orbit_type:-  {roadster.orbit_type}</div>
                            <div>periapsis_arg:-  {roadster.periapsis_arg}</div>
                            <div>periapsis_au:-  {roadster.periapsis_au}</div>
                            <div>period_days :-  {roadster.period_days}</div>
                            <div>semi_major_axis_au:-  {roadster.semi_major_axis_au}</div>
                            <div>speed_kph:-  {roadster.speed_kph}</div>
                            <div>speed_mph:-  {roadster.speed_mph}</div>
                            <div>video:-  {roadster.video}</div>
                            <div>wikipedia:-  {roadster.wikipedia}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Roadster }) => {
    const { loading, roadster } = Roadster;
    return { loading, roadster };
}
const mapDispatchToProps = dispatch => {
    return {
        requestRoadster: () => {
            dispatch(requestRoadster());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RoadsterScreen)  