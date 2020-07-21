import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { getPastCapsule } from '../../Redux/Action/Capsules/index';
import CapsuleTable from "../common/CapsuleTable";

class PastCapsules extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.getPastCapsule()
    }

    render() {
        const { loading, pastCapsule } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <CapsuleTable
                            title={"Past Capsules"}
                            header={["Capsule Id",
                                "Capsule Serial", "Details",
                                "Landings", "Missions", "Original Launch", "Original Launch Unix", "Reuse count", "Status",
                                "Type", "Details"
                            ]}
                            data={pastCapsule}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Capsules }) => {
    const { loading, pastCapsule } = Capsules;
    return { loading, pastCapsule };
}
const mapDispatchToProps = dispatch => {
    return {
        getPastCapsule: () => {
            dispatch(getPastCapsule());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PastCapsules)  