import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_CAPSULES,


    GET_CAPSULES_DETAIL,
    GET_CAPSULES_DETAIL_FAIL,
    GET_CAPSULES_DETAIL_SUCCESS, GET_CAPSULES_FAIL,


    GET_CAPSULES_PAST,
    GET_CAPSULES_PAST_FAIL,
    GET_CAPSULES_PAST_SUCCESS,
    GET_CAPSULES_SUCCESS,





    GET_CAPSULES_UPCOMING, GET_CAPSULES_UPCOMING_FAIL,
    GET_CAPSULES_UPCOMING_SUCCESS
} from '../../Types';

export const requestCapsules = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_CAPSULES,
        });
        const api = baseUrl + 'capsules';
        axios.get(api, {}, {})
            .then((res) =>
                capsuleSuccess(dispatch, res)
            ).catch(error => {
                capsuleFail(dispatch, error);
            }
            );
    };
};

const capsuleSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CAPSULES_SUCCESS,
        payload: res.data,
    });
};
const capsuleFail = (dispatch, error) => {
    dispatch({
        type: GET_CAPSULES_FAIL,
    });
};

export const capsuleDetails = (capsule_serial) => {
    return dispatch => {
        dispatch({
            type: GET_CAPSULES_DETAIL,
        });
        const api = baseUrl + `capsules/${capsule_serial}`;
        axios.get(api, {}, {})
            .then((res) =>
                capsuleDetailSuccess(dispatch, res)
            ).catch(error => {
                capsuleDetailFail(dispatch, error);
            }
            );
    };
};

const capsuleDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CAPSULES_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const capsuleDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_CAPSULES_DETAIL_FAIL,
    });
};

export const upcomingCapsule = () => {
    return dispatch => {
        dispatch({
            type: GET_CAPSULES_UPCOMING,
        });
        const api = baseUrl + `capsules/upcoming`;
        axios.get(api, {}, {})
            .then((res) =>
                upcomingCapsuleSuccess(dispatch, res)
            ).catch(error => {
                upcomingCapsuleFail(dispatch, error);
            }
            );
    };
};

const upcomingCapsuleSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CAPSULES_UPCOMING_SUCCESS,
        payload: res.data,
    });
};
const upcomingCapsuleFail = (dispatch, error) => {
    dispatch({
        type: GET_CAPSULES_UPCOMING_FAIL,
    });
};


export const pastCapsule = () => {
    return dispatch => {
        dispatch({
            type: GET_CAPSULES_PAST,
        });
        const api = baseUrl + `capsules/past`;
        axios.get(api, {}, {})
            .then((res) =>
                pastCapsuleSuccess(dispatch, res)
            ).catch(error => {
                pastCapsuleFail(dispatch, error);
            }
            );
    };
};

const pastCapsuleSuccess = (dispatch, res) => {
    dispatch({
        type: GET_CAPSULES_PAST_SUCCESS,
        payload: res.data,
    });
};
const pastCapsuleFail = (dispatch, error) => {
    dispatch({
        type: GET_CAPSULES_PAST_FAIL,
    });
};
