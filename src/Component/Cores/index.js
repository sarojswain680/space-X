import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestCores } from '../../Redux/Action/Cores/index';
import CoresTable from "../common/CoresTable";

class CoresScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestCores()
    }

    render() {
        const { loading, cores } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <CoresTable
                            title={"Cores"}
                            header={["ASDS Attempts",
                                "ASDS Landings", "Block",
                                "Core serial", "Details", "Missions", "Original Launch", "Original Launch Unix", "Reuse count", "RTLS Attempts",
                                "RTLS Landings", "Status", "Water Landing", "Details"
                            ]}
                            data={cores}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Cores }) => {
    const { loading, cores } = Cores;
    return { loading, cores };
}
const mapDispatchToProps = dispatch => {
    return {
        requestCores: () => {
            dispatch(requestCores());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoresScreen)  