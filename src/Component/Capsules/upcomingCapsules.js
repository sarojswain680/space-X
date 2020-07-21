import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { getUpcomingCapsule } from '../../Redux/Action/Capsules/index';
import CapsuleTable from "../common/CapsuleTable";

class UpcomingCapsulesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.getUpcomingCapsule()
    }

    render() {
        const { loading, upcomingCapsule } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <CapsuleTable
                            title={"Upcoming Capsules"}
                            header={["Capsule Id",
                                "Capsule Serial", "Details",
                                "Landings", "Missions", "Original Launch", "Original Launch Unix", "Reuse count", "Status",
                                "Type", "Details"
                            ]}
                            data={upcomingCapsule}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Capsules }) => {
    const { loading, upcomingCapsule } = Capsules;
    return { loading, upcomingCapsule };
}
const mapDispatchToProps = dispatch => {
    return {
        getUpcomingCapsule: () => {
            dispatch(getUpcomingCapsule());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpcomingCapsulesScreen)  