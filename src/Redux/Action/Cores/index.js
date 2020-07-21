import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_CORES,


    GET_CORES_DETAIL,
    GET_CORES_DETAIL_FAIL,
    GET_CORES_DETAIL_SUCCESS, GET_CORES_FAIL,


    GET_CORES_PAST,
    GET_CORES_PAST_FAIL,
    GET_CORES_PAST_SUCCESS,
    GET_CORES_SUCCESS,





    GET_CORES_UPCOMING, GET_CORES_UPCOMING_FAIL,
    GET_CORES_UPCOMING_SUCCESS
} from '../../Types';

export const requestCores = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_CORES,
        });
        const api = baseUrl + 'cores';
        axios.get(api, {}, {})
            .then((res) =>
                coreSuccess(dispatch, res)
            ).catch(error => {
                coreFail(dispatch, error);
            }
            );
    };
};

const coreSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CORES_SUCCESS,
        payload: res.data,
    });
};
const coreFail = (dispatch, error) => {
    dispatch({
        type: GET_CORES_FAIL,
    });
};

export const coreDetails = (core_serial) => {
    return dispatch => {
        dispatch({
            type: GET_CORES_DETAIL,
        });
        const api = baseUrl + `cores/${core_serial}`;
        axios.get(api, {}, {})
            .then((res) =>
                coreDetailSuccess(dispatch, res)
            ).catch(error => {
                coreDetailFail(dispatch, error);
            }
            );
    };
};

const coreDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CORES_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const coreDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_CORES_DETAIL_FAIL,
    });
};

export const getUpcomingCore = () => {
    return dispatch => {
        dispatch({
            type: GET_CORES_UPCOMING,
        });
        const api = baseUrl + `cores/upcoming`;
        axios.get(api, {}, {})
            .then((res) =>
                upcomingCoreSuccess(dispatch, res)
            ).catch(error => {
                upcomingCoreFail(dispatch, error);
            }
            );
    };
};

const upcomingCoreSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CORES_UPCOMING_SUCCESS,
        payload: res.data,
    });
};
const upcomingCoreFail = (dispatch, error) => {
    dispatch({
        type: GET_CORES_UPCOMING_FAIL,
    });
};


export const getPastCores = () => {
    return dispatch => {
        dispatch({
            type: GET_CORES_PAST,
        });
        const api = baseUrl + `cores/past`;
        axios.get(api, {}, {})
            .then((res) =>
                pastCoresSuccess(dispatch, res)
            ).catch(error => {
                pastCoresFail(dispatch, error);
            }
            );
    };
};

const pastCoresSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CORES_PAST_SUCCESS,
        payload: res.data,
    });
};
const pastCoresFail = (dispatch, error) => {
    dispatch({
        type: GET_CORES_PAST_FAIL,
    });
};
