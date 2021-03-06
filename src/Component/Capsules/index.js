import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestCapsules } from '../../Redux/Action/Capsules/index';
import CapsuleTable from "../common/CapsuleTable";

class CapsulesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestCapsules()
    }

    render() {
        const { loading, capsules } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <CapsuleTable
                            title={"Capsules"}
                            header={["Capsule Id",
                                "Capsule Serial", "Details",
                                "Landings", "Missions", "Original Launch", "Original Launch Unix", "Reuse count", "Status",
                                "Type", "Details"
                            ]}
                            data={capsules}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Capsules }) => {
    const { loading, capsules } = Capsules;
    return { loading, capsules };
}
const mapDispatchToProps = dispatch => {
    return {
        requestCapsules: () => {
            dispatch(requestCapsules());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CapsulesScreen)  