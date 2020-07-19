import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_LAUNCHPAD,



    GET_CAPSULES_DETAIL_FAIL, GET_LAUNCHPAD_DETAIL,
    GET_LAUNCHPAD_DETAIL_SUCCESS, GET_LAUNCHPAD_FAIL, GET_LAUNCHPAD_SUCCESS
} from '../../Types';

export const requestHistory = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_LAUNCHPAD,
        });
        const api = baseUrl + 'history';
        axios.get(api, {}, {})
            .then((res) =>
                historySuccess(dispatch, res)
            ).catch(error => {
                historyFail(dispatch, error);
            }
            );
    };
};

const historySuccess = (dispatch, res) => {
    dispatch({
        type: GET_LAUNCHPAD_SUCCESS,
        payload: res.data,
    });
};
const historyFail = (dispatch, error) => {
    dispatch({
        type: GET_LAUNCHPAD_FAIL,
    });
};

export const historyDetails = (id) => {
    return dispatch => {
        dispatch({
            type: GET_LAUNCHPAD_DETAIL,
        });
        const api = baseUrl + `history/${id}`;
        axios.get(api, {}, {})
            .then((res) =>
                historyDetailSuccess(dispatch, res)
            ).catch(error => {
                historyDetailFail(dispatch, error);
            }
            );
    };
};

const historyDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_LAUNCHPAD_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const historyDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_CAPSULES_DETAIL_FAIL,
    });
};
