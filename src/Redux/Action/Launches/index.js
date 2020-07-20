import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import { GET_ALL_LAUNCHES, GET_LAUNCHES_FAIL, GET_LAUNCHES_SUCCESS } from '../../Types';

export const requestLaunches = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_LAUNCHES,
        });
        const api = baseUrl + 'launches';
        axios.get(api, {}, {})
            .then((res) =>
                launchSuccess(dispatch, res)
            ).catch(error => {
                launchFail(dispatch, error);
            }
            );
    };
};

const launchSuccess = (dispatch, res) => {
    dispatch({
        type: GET_LAUNCHES_SUCCESS,
        payload: res.data,
    });
};
const launchFail = (dispatch, error) => {
    dispatch({
        type: GET_LAUNCHES_FAIL,
    });
};

