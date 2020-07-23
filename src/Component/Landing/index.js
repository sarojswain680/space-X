import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestLandpad } from '../../Redux/Action/LandPad/index';
import LandpadTable from "../common/LandpadTable";

class LandpadsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestLandpad()
    }

    render() {
        const { loading, landpads } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <LandpadTable
                            title={"Landpads"}
                            header={["attempted_landings",
                                "details", "full_name",
                                "id", "landing_type",
                                "location", "status", "successful_landings", "wikipedia"
                            ]}
                            data={landpads}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Landpad }) => {
    const { loading, landpads } = Landpad;
    return { loading, landpads };
}
const mapDispatchToProps = dispatch => {
    return {
        requestLandpad: () => {
            dispatch(requestLandpad());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandpadsScreen)  