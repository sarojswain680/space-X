import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestDragons } from '../../Redux/Action/Dragons/index';
import DragonsTable from "../common/DragonsTable";

class DragonsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestDragons()
    }

    render() {
        const { loading, dragons } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <DragonsTable
                            title={"Dragons"}
                            header={["Active",
                                "Crew capacity", "Description",
                                "Diameter", "Dry mass kg.",
                                "Dry mass lb.", "First flight",
                                "Flicker images",
                                "Heat shield", "Height w trunk",
                                "Id", "Launch payload mass",
                                "Launch Payload vol.", "Name",
                                "Orbit duration Yr", "Pressurized capsule",
                                "Return Payload mass", "Return Payload volume",
                                "Sidewall angle deg.", "thrusters", "Trunk", "Type", "Wikipedia"
                            ]}
                            data={dragons}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Dragons }) => {
    const { loading, dragons } = Dragons;
    return { loading, dragons };
}
const mapDispatchToProps = dispatch => {
    return {
        requestDragons: () => {
            dispatch(requestDragons());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DragonsScreen)  