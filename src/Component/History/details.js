import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { historyDetails } from '../../Redux/Action/History/index';

class HIstoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.historyDetails(this.props.location.state.id)
    }

    render() {
        const { loading, history } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{history.title}</h3>
                            <div>details :-{history.details}</div>
                            <div>event_date_unix:-{history.event_date_unix}</div>
                            <div>event_date_utc:-{history.event_date_utc}</div>
                            <div>flight_number:-{history.flight_number}</div>
                            <div>id:-{history.id}</div>
                            <div>links:-{`Article :- ${history && history.links && history.links.article} , Reddit :- ${history && history.links && history.links.reddit}, wikipedia :- ${history && history.links && history.links.wikipedia}`}</div>
                            <div>title:-{history.title}</div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ History }) => {
    const { loading, history } = History;
    return { loading, history };
}
const mapDispatchToProps = dispatch => {
    return {
        historyDetails: (id) => {
            dispatch(historyDetails(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HIstoryDetails)  