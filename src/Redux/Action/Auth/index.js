import axios from 'axios';
import { LOGIN_FAIL, LOGIN_SUCCESS, ON_LOGIN } from '../../Types';

export const requestLogin = (email, password) => {
    return dispatch => {
        dispatch({
            type: ON_LOGIN,
        });
        const api = 'https://run.mocky.io/v3/cfc2db68-b988-4371-9e19-9a043b7a8d3a';
        const body = {
            email: email,
            password: password,
        };
        axios.post(api, body, {})
            .then(res =>
                loginSuccess(dispatch, res)
            ).catch(error => {
                alert('Wrong user name/password');
                loginFail(dispatch, error);
            }
            );
    };
};

const loginSuccess = (dispatch, res) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
    });
};
const loginFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_FAIL,
    });
};

