import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { missionDetails } from '../../Redux/Action/Missions/index';

class MissionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.missionDetails(this.props.location.state.id)
    }

    render() {
        const { loading, mission } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{mission.mission_name}</h3>
                            <div>description :-{mission.description}</div>
                            <div>manufacturers:-{mission.manufacturers}</div>
                            <div>mission_id:-{mission.mission_id}</div>
                            <div>mission_name:-{mission.mission_name}</div>
                            <div>payload_ids:-{mission.payload_ids}</div>
                            <div>twitter:-{mission.twitter}</div>
                            <div>website:-{mission.website}</div>
                            <div>wikipedia:-{mission.wikipedia}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Mission }) => {
    const { loading, mission } = Mission;
    return { loading, mission };
}
const mapDispatchToProps = dispatch => {
    return {
        missionDetails: (id) => {
            dispatch(missionDetails(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MissionDetails)  