import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_ALL_MISSION,



    GET_MISSION_DETAIL,
    GET_MISSION_DETAIL_FAIL, GET_MISSION_DETAIL_SUCCESS, GET_MISSION_FAIL, GET_MISSION_SUCCESS
} from '../../Types/index';

export const requestMission = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_MISSION,
        });
        const api = baseUrl + 'missions';
        axios.get(api, {}, {})
            .then((res) =>
                missionSuccess(dispatch, res)
            ).catch(error => {
                missionFail(dispatch, error);
            }
            );
    };
};

const missionSuccess = (dispatch, res) => {
    dispatch({
        type: GET_MISSION_SUCCESS,
        payload: res.data,
    });
};
const missionFail = (dispatch, error) => {
    dispatch({
        type: GET_MISSION_FAIL,
    });
};

export const missionDetails = (mission_id) => {
    return dispatch => {
        dispatch({
            type: GET_MISSION_DETAIL,
        });
        const api = baseUrl + `missions/${mission_id}`;
        axios.get(api, {}, {})
            .then((res) =>
                missionDetailSuccess(dispatch, res)
            ).catch(error => {
                missionDetailFail(dispatch, error);
            }
            );
    };
};

const missionDetailSuccess = (dispatch, res) => {
    dispatch({
        type: GET_MISSION_DETAIL_SUCCESS,
        payload: res.data,
    });
};
const missionDetailFail = (dispatch, error) => {
    dispatch({
        type: GET_MISSION_DETAIL_FAIL,
    });
};
