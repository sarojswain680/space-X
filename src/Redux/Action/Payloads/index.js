import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_PAYLOAD,



    GET_PAYLOAD_DETAIL,
    GET_PAYLOAD_DETAIL_FAIL, GET_PAYLOAD_DETAIL_SUCCESS, GET_PAYLOAD_FAIL, GET_PAYLOAD_SUCCESS
} from '../../Types';

export const requestPayload = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_PAYLOAD,
        });
        const api = baseUrl + 'payloads';
        axios.get(api, {}, {})
            .then((res) =>
                payloadSuccess(dispatch, res)
            ).catch(error => {
                payloadFail(dispatch, error);
            }
            );
    };
};

const payloadSuccess = (dispatch, res) => {
    dispatch({
        type: GET_PAYLOAD_SUCCESS,
        payload: res.data,
    });
};
const payloadFail = (dispatch, error) => {
    dispatch({
        type: GET_PAYLOAD_FAIL,
    });
};

export const payloadDetails = (payload_id) => {
    return dispatch => {
        dispatch({
            type: GET_PAYLOAD_DETAIL,
        });
        const api = baseUrl + `payloads/${payload_id}`;
        axios.get(api, {}, {})
            .then((res) =>
                payloadDetailSuccess(dispatch, res)
            ).catch(error => {
                payloadDetailFail(dispatch, error);
            }
            );
    };
};

const payloadDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_PAYLOAD_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const payloadDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_PAYLOAD_DETAIL_FAIL,
    });
};
