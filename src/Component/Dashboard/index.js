import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestCompanyInfo } from '../../Redux/Action/Info/index';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestCompanyInfo()
    }

    render() {
        const { loading, company } = this.props;
        return (
            <div className="company">
                {
                    loading ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <div className="auth-inner">
                            <h3 className="header">{"Company Info"}</h3>
                            <div>C.E.O : - {company.ceo}</div>
                            <div>C.O.O : - {company.coo}</div>
                            <div>C.T.O Propulsion : - {company.cto_propulsion}</div>
                            <div>Employess : - {company.employees}</div>
                            <div>Founded : - {company.founded}</div>
                            <div>Founder : - {company.founder}</div>
                            <div>Headquarters : -{`${company && company.headquarters && company.headquarters.address}, ${company && company.headquarters && company.headquarters.city}, ${company && company.headquarters && company.headquarters.state}`} </div>
                            <div>Launch sites : - {company.launch_sites}</div>
                            <div>Elon twitter : - {company && company.links && company.links.elon_twitter}</div>
                            <div>Flicker : - {company && company.links && company.links.flickr}</div>
                            <div>Twitter : - {company && company.links && company.links.twitter}</div>
                            <div>Website : - {company && company.links && company.links.website}</div>
                            <div>Name : - {company.name}</div>
                            <div>Summary : - {company.summary}</div>
                            <div>Test sites : - {company.test_sites}</div>
                            <div>Valuation : - {company.valuation}</div>
                            <div>Vehicles : - {company.vehicles}</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)  