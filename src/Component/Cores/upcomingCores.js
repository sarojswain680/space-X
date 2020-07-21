import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { getUpcomingCore } from '../../Redux/Action/Cores/index';
import CoresTable from "../common/CoresTable";

class UpcomingCores extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.getUpcomingCore()
    }

    render() {
        const { loading, upcomingCore } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <CoresTable
                            title={"Upcoming Cores"}
                            header={["ASDS Attempts",
                                "ASDS Landings", "Block",
                                "Core serial", "Details", "Missions", "Original Launch", "Original Launch Unix", "Reuse count", "RTLS Attempts",
                                "RTLS Landings", "Status", "Water Landing", "Details"
                            ]}
                            data={upcomingCore}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Cores }) => {
    const { loading, upcomingCore } = Cores;
    return { loading, upcomingCore };
}
const mapDispatchToProps = dispatch => {
    return {
        getUpcomingCore: () => {
            dispatch(getUpcomingCore());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpcomingCores)  