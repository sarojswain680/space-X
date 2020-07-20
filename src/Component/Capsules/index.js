import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestCompanyInfo } from '../../Redux/Action/Info/index';

class Capsules extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestCompanyInfo()
    }

    render() {
        const { loading } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{"Capsules"}</h3>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ Info }) => {
    const { loading, company } = Info;
    return { loading, company };
}
const mapDispatchToProps = dispatch => {
    return {
        requestCompanyInfo: () => {
            dispatch(requestCompanyInfo());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Capsules)  