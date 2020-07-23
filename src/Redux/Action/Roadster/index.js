import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_ROADSTER,




    GET_ROADSTER_FAIL, GET_ROADSTER_SUCCESS
} from '../../Types/index';

export const requestRoadster = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_ROADSTER,
        });
        const api = baseUrl + 'roadster';
        axios.get(api, {}, {})
            .then((res) =>
                roadsterSuccess(dispatch, res)
            ).catch(error => {
                roadsterFail(dispatch, error);
            }
            );
    };
};

const roadsterSuccess = (dispatch, res) => {
    dispatch({
        type: GET_ROADSTER_SUCCESS,
        payload: res.data,
    });
};
const roadsterFail = (dispatch, error) => {
    dispatch({
        type: GET_ROADSTER_FAIL,
    });
};

