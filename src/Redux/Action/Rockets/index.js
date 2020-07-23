import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_ROCKETS,



    GET_ROCKETS_DETAIL,
    GET_ROCKETS_DETAIL_FAIL, GET_ROCKETS_DETAIL_SUCCESS, GET_ROCKETS_FAIL, GET_ROCKETS_SUCCESS
} from '../../Types/index';

export const requestRocket = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_ROCKETS,
        });
        const api = baseUrl + 'rockets';
        axios.get(api, {}, {})
            .then((res) =>
                rocketSuccess(dispatch, res)
            ).catch(error => {
                rocketFail(dispatch, error);
            }
            );
    };
};

const rocketSuccess = (dispatch, res) => {
    dispatch({
        type: GET_ROCKETS_SUCCESS,
        payload: res.data,
    });
};
const rocketFail = (dispatch, error) => {
    dispatch({
        type: GET_ROCKETS_FAIL,
    });
};

export const rocketDetails = (rocket_id) => {
    return dispatch => {
        dispatch({
            type: GET_ROCKETS_DETAIL,
        });
        const api = baseUrl + `rockets/${rocket_id}`;
        axios.get(api, {}, {})
            .then((res) =>
                rocketDetailSuccess(dispatch, res)
            ).catch(error => {
                rocketDetailFail(dispatch, error);
            }
            );
    };
};

const rocketDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_ROCKETS_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const rocketDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_ROCKETS_DETAIL_FAIL,
    });
};
