import React, { Component } from "react";
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestData } from '../../Redux/Action/Auth/index';
import { Table } from 'react-bootstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.requestData()
    }

    render() {
        const { users } = this.props;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Employee List</h3>
                    <div className="form-group">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            {
                                users.map(user => {
                                    return <tbody>
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phoneNo}</td>
                                        </tr>
                                    </tbody>
                                })
                            }
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { users, userLoading } = state;
    return { users, userLoading };
}
const mapDispatchToProps = dispatch => {
    return {
        requestData: () => {
            dispatch(requestData());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)  