import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestMission } from '../../Redux/Action/Missions/index';
import MissionTable from "../common/MissionTable";

class MissionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestMission()
    }

    render() {
        const { loading, missions } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <MissionTable
                            title={"Missions"}
                            header={["description",
                                "manufacturers", "mission_id", "mission_name",
                                "payload_ids", "twitter",
                                "website", "wikipedia"
                            ]}
                            data={missions}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Mission }) => {
    const { loading, missions } = Mission;
    return { loading, missions };
}
const mapDispatchToProps = dispatch => {
    return {
        requestMission: () => {
            dispatch(requestMission());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MissionScreen)  