import React, { Component } from "react";
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { requestLogin } from '../../Redux/Action/Auth/index';
import { emailValidation } from '../common/index';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email) {
            return this.setState({ error: 'Please enter your user name' })
        } else if (!emailValidation.test(email)) {
            return this.setState({ error: 'Inavalid email address' })
        } else if (!password) {
            return this.setState({ error: 'Please enter your password' })
        } else if (password.length < 8 || password.length > 16) {
            return this.setState({ error: "Invalid credentials" })
        } else {
            this.props.requestLogin(email, password)
        }
    }

    componentDidUpdate = async (prevProps) => {
        if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
            return this.props.history.push('/dashboard')
        } else {
            return null
        }

    }
    render() {
        const { email, password, error } = this.state;
        const { loginError } = this.props;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign In</h3>
                        {
                            error || loginError ?
                                <div className="error-view">
                                    <text className="error-text">{error || loginError}</text>
                                </div>
                                : null
                        }
                        <div className="form-group">
                            <label>User Name</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Username"
                                value={email}
                                onChange={(event) => this.setState({ email: event.target.value, error: "" })}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(event) => this.setState({ password: event.target.value, error: "" })}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={(e) => this.onSubmit(e)}>{"Login"}</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ Auth }) => {
    const { isLoggedIn, loading, loginError } = Auth;
    return { isLoggedIn, loading, loginError };
}
const mapDispatchToProps = dispatch => {
    return {
        requestLogin: (email, password) => {
            dispatch(requestLogin(email, password));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)  