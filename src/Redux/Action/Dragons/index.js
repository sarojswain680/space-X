import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_DRAGONS,


    GET_DRAGONS_DETAIL,
    GET_DRAGONS_DETAIL_SUCCESS, GET_DRAGONS_FAIL, GET_DRAGONS_SUCCESS
} from '../../Types';

export const requestDragons = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_DRAGONS,
        });
        const api = baseUrl + 'dragons';
        axios.get(api, {}, {})
            .then((res) =>
                dragonSuccess(dispatch, res)
            ).catch(error => {
                dragonFail(dispatch, error);
            }
            );
    };
};

const dragonSuccess = (dispatch, res) => {
    dispatch({
        type: GET_DRAGONS_SUCCESS,
        payload: res.data,
    });
};
const dragonFail = (dispatch, error) => {
    dispatch({
        type: GET_DRAGONS_FAIL,
    });
};

export const dragonDetails = (id) => {
    return dispatch => {
        dispatch({
            type: GET_DRAGONS_DETAIL,
        });
        const api = baseUrl + `dragons/${id}`;
        axios.get(api, {}, {})
            .then((res) =>
                dragonDetailSuccess(dispatch, res)
            ).catch(error => {
                dragonDetailFail(dispatch, error);
            }
            );
    };
};

const dragonDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_DRAGONS_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const dragonDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_DRAGONS_DETAIL_FAIL,
    });
};
