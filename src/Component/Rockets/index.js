import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestRocket } from '../../Redux/Action/Rockets/index';
import RocketTable from "../common/RocketTable";

class RocketsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestRocket()
    }

    render() {
        const { loading, rockets } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <RocketTable
                            title={"Rockets"}
                            header={["active",
                                "boosters", "company", "cost_per_launch",
                                "country", "description",
                                "diameter",
                                "first_flight", "flickr_images", "id", "rocket_id", "rocket_name", "rocket_type",
                                "stages", "success_rate_pct", "wikipedia",
                            ]}
                            data={rockets}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Rocket }) => {
    const { loading, rockets } = Rocket;
    return { loading, rockets };
}
const mapDispatchToProps = dispatch => {
    return {
        requestRocket: () => {
            dispatch(requestRocket());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RocketsScreen)  