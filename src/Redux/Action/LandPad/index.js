import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_LANDPAD,



    GET_LANDPAD_DETAIL,
    GET_LANDPAD_DETAIL_SUCCESS, GET_LANDPAD_FAIL, GET_LANDPAD_SUCCESS, GET_LANDPAD_DETAIL_FAIL
} from '../../Types';

export const requestLandpad = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_LANDPAD,
        });
        const api = baseUrl + 'landpads';
        axios.get(api, {}, {})
            .then((res) =>
                landpadSuccess(dispatch, res)
            ).catch(error => {
                landpadFail(dispatch, error);
            }
            );
    };
};

const landpadSuccess = (dispatch, res) => {
    dispatch({
        type: GET_LANDPAD_SUCCESS,
        payload: res.data,
    });
};
const landpadFail = (dispatch, error) => {
    dispatch({
        type: GET_LANDPAD_FAIL,
    });
};

export const landpadDetails = (id) => {
    return dispatch => {
        dispatch({
            type: GET_LANDPAD_DETAIL,
        });
        const api = baseUrl + `landpads/${id}`;
        axios.get(api, {}, {})
            .then((res) =>
                landpadDetailSuccess(dispatch, res)
            ).catch(error => {
                landpadDetailFail(dispatch, error);
            }
            );
    };
};

const landpadDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_LANDPAD_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const landpadDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_LANDPAD_DETAIL_FAIL,
    });
};
