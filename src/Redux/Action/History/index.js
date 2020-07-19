import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_HISTORY,


    GET_HISTORY_DETAIL,
    GET_HISTORY_DETAIL_SUCCESS, GET_HISTORY_FAIL, GET_HISTORY_SUCCESS
} from '../../Types';

export const requestHistory = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_HISTORY,
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
        type: GET_HISTORY_SUCCESS,
        payload: res.data,
    });
};
const historyFail = (dispatch, error) => {
    dispatch({
        type: GET_HISTORY_FAIL,
    });
};

export const historyDetails = (id) => {
    return dispatch => {
        dispatch({
            type: GET_HISTORY_DETAIL,
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
        type: GET_HISTORY_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const historyDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_HISTORY_DETAIL_FAIL,
    });
};
