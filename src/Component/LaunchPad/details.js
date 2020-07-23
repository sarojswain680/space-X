import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { launchPadDetails } from '../../Redux/Action/LaunchPad/index';

class LaunchpadDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.launchPadDetails(this.props.location.state.id)
    }

    render() {
        const { loading, launchPad } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{launchPad.name}</h3>
                            <div>attempted_launches :-{launchPad.attempted_launches}</div>
                            <div>details:-{launchPad.details}</div>
                            <div>id:-{launchPad.id}</div>
                            <div>location:-{`latitude :- ${launchPad && launchPad.location && launchPad.location.latitude} , longitude :- ${launchPad && launchPad.location && launchPad.location.longitude}, name :- ${launchPad && launchPad.location && launchPad.location.name}, region:-${launchPad && launchPad.location && launchPad.location.region}`}</div>
                            <div>name:-{launchPad.name}</div>
                            <div>site_id:-{launchPad.site_id}</div>
                            <div>site_name_long:-{launchPad.site_name_long}</div>
                            <div>status:-{launchPad.status}</div>
                            <div>successful_launches:-{launchPad.successful_launches}</div>
                            <div>vehicles_launched:-{launchPad.vehicles_launched}</div>
                            <div>wikipedia:-{launchPad.wikipedia}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ LaunchPad }) => {
    const { loading, launchPad } = LaunchPad;
    return { loading, launchPad };
}
const mapDispatchToProps = dispatch => {
    return {
        launchPadDetails: (id) => {
            dispatch(launchPadDetails(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LaunchpadDetails)  