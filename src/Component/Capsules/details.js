import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { capsuleDetails } from '../../Redux/Action/Capsules/index';

class CapsulesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.capsuleDetails(this.props.location.state.capsule_serial)
    }

    render() {
        const { loading, capsule } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{capsule.capsule_id}</h3>
                            <div>Capsule Id : - {capsule.capsule_id}</div>
                            <div>Capsule Serial : - {capsule.capsule_serial}</div>
                            <div>Details : - {capsule.details}</div>
                            <div>Landings : - {capsule.landings}</div>
                            <div>Missions : - {capsule && capsule.missions && capsule.missions.map((item, index) => {
                                return (
                                    <>
                                        <div key={index}>No:-{index + 1}</div>
                                        <div>Name :-{item.name}</div>
                                        <div>Flight:-{item.flight}</div>
                                    </>
                                )
                            })}</div>
                            <div>Founded : - {capsule.capsule_id}</div>
                            <div>Original Launch : - {capsule.original_launch}</div>
                            <div>Original Launch Unix : -{capsule.original_launch_unix} </div>
                            <div>Reuse Count : - {capsule.reuse_count}</div>
                            <div>Status : - {capsule.status}</div>
                            <div>Type : - {capsule.type}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Capsules }) => {
    const { loading, capsule } = Capsules;
    return { loading, capsule };
}
const mapDispatchToProps = dispatch => {
    return {
        capsuleDetails: (capsule_serial) => {
            dispatch(capsuleDetails(capsule_serial));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CapsulesDetails)  