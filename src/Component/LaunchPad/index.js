import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestLaunchPad } from '../../Redux/Action/LaunchPad/index';
import LaunchpadTable from "../common/LaunchPadTable";

class LaunchPadScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestLaunchPad()
    }

    render() {
        const { loading, launchPads } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <LaunchpadTable
                            title={"LaunchPads"}
                            header={["attempted_launches",
                                "details", "id", "location",
                                "name", "site_id",
                                "site_name_long", "status", "successful_launches",
                                "vehicles_launched", "wikipedia"
                            ]}
                            data={launchPads}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ LaunchPad }) => {
    const { loading, launchPads } = LaunchPad;
    return { loading, launchPads };
}
const mapDispatchToProps = dispatch => {
    return {
        requestLaunchPad: () => {
            dispatch(requestLaunchPad());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LaunchPadScreen)  