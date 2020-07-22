import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestHistory } from '../../Redux/Action/History/index';
import HistoryTable from "../common/HistoryTable";

class HistoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestHistory()
    }

    render() {
        const { loading, historys } = this.props;
        console.log('vvdfsvdfvd', historys[0])
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <HistoryTable
                            title={"Historys"}
                            header={["details",
                                "event_date_unix", "event_date_utc",
                                "flight_number", "id",
                                "links", "title"
                            ]}
                            data={historys}
                            push={this.props.history.push}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ History }) => {
    const { loading, historys } = History;
    return { loading, historys };
}
const mapDispatchToProps = dispatch => {
    return {
        requestHistory: () => {
            dispatch(requestHistory());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)  