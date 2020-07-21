import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { coreDetails } from '../../Redux/Action/Cores/index';

class CoresDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.coreDetails(this.props.location.state.cores_serial)
    }

    render() {
        const { loading, core } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{core.core_serial}</h3>
                            <div>ASDS Attempts : - {core.asds_attempts}</div>
                            <div>ASDS Landings : - {core.asds_landings}</div>
                            <div>Block : - {core.block}</div>
                            <div>Core serial : - {core.core_serial}</div>
                            <div>Missions : - {core && core.missions && core.missions.map((item, index) => {
                                return (
                                    <>
                                        <div key={index}>No:-{index + 1}</div>
                                        <div>Name :-{item.name}</div>
                                        <div>Flight:-{item.flight}</div>
                                    </>
                                )
                            })}</div>
                            <div>Details : - {core.details}</div>
                            <div>Original Launch : - {core.original_launch}</div>
                            <div>Original Launch Unix : -{core.original_launch_unix} </div>
                            <div>Reuse Count : - {core.reuse_count}</div>
                            <div>RTLS Attempts : - {core.rtls_attempts}</div>
                            <div>RTLS Landings : - {core.rtls_landings}</div>
                            <div>Status : - {core.status}</div>
                            <div>Water Landing : - {core.water_landing ? "true" : "false"}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Cores }) => {
    const { loading, core } = Cores;
    return { loading, core };
}
const mapDispatchToProps = dispatch => {
    return {
        coreDetails: (core_serial) => {
            dispatch(coreDetails(core_serial));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoresDetails)  