import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestPayload } from '../../Redux/Action/Payloads/index';
import PayloadTable from "../common/PayloadTable";

class PayloadsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestPayload()
    }

    render() {
        const { loading, payloads } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <PayloadTable
                            title={"Payloads"}
                            header={["customers",
                                "manufacturer", "nationality", "norad_id",
                                "orbit", "orbit_params",
                                "payload_id", "payload_mass_kg",
                                "payload_mass_lbs", "payload_type", "reused"
                            ]}
                            data={payloads}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Payload }) => {
    const { loading, payloads } = Payload;
    return { loading, payloads };
}
const mapDispatchToProps = dispatch => {
    return {
        requestPayload: () => {
            dispatch(requestPayload());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PayloadsScreen)  