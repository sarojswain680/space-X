import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_LAUNCHPAD,



    GET_LAUNCHPAD_DETAIL,
    GET_LAUNCHPAD_DETAIL_FAIL, GET_LAUNCHPAD_DETAIL_SUCCESS, GET_LAUNCHPAD_FAIL, GET_LAUNCHPAD_SUCCESS
} from '../../Types';

export const requestLaunchPad = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_LAUNCHPAD,
        });
        const api = baseUrl + 'launchpads';
        axios.get(api, {}, {})
            .then((res) =>
                launchPadSuccess(dispatch, res)
            ).catch(error => {
                launchPadFail(dispatch, error);
            }
            );
    };
};

const launchPadSuccess = (dispatch, res) => {
    dispatch({
        type: GET_LAUNCHPAD_SUCCESS,
        payload: res.data,
    });
};
const launchPadFail = (dispatch, error) => {
    dispatch({
        type: GET_LAUNCHPAD_FAIL,
    });
};

export const launchPadDetails = (site_id) => {
    return dispatch => {
        dispatch({
            type: GET_LAUNCHPAD_DETAIL,
        });
        const api = baseUrl + `launchpads/${site_id}`;
        axios.get(api, {}, {})
            .then((res) =>
                launchPadDetailSuccess(dispatch, res)
            ).catch(error => {
                launchPadDetailFail(dispatch, error);
            }
            );
    };
};

const launchPadDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_LAUNCHPAD_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const launchPadDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_LAUNCHPAD_DETAIL_FAIL,
    });
};
