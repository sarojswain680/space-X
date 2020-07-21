import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { getPastCores } from '../../Redux/Action/Cores/index';
import CoresTable from "../common/CoresTable";

class PastCores extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.getPastCores()
    }

    render() {
        const { loading, pastCore } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <CoresTable
                            title={"Past Cores"}
                            header={["ASDS Attempts",
                                "ASDS Landings", "Block",
                                "Core serial", "Details", "Missions", "Original Launch", "Original Launch Unix", "Reuse count", "RTLS Attempts",
                                "RTLS Landings", "Status", "Water Landing"
                            ]}
                            data={pastCore}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Cores }) => {
    const { loading, pastCore } = Cores;
    return { loading, pastCore };
}
const mapDispatchToProps = dispatch => {
    return {
        getPastCores: () => {
            dispatch(getPastCores());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PastCores)  