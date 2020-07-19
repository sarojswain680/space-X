import axios from 'axios';
import { baseUrl } from '../../../Component/common/index';
import {
    GET_COMPANY_INFO,
    GET_COMPANY_INFO_FAIL,
    GET_COMPANY_INFO_SUCCESS,
    GET_INFO, GET_INFO_FAIL,
    GET_INFO_SUCCESS
} from '../../Types';

export const requestCompanyInfo = () => {
    return dispatch => {
        dispatch({
            type: GET_COMPANY_INFO,
        });
        const api = baseUrl + 'info';
        axios.get(api, {}, {})
            .then((res) =>
                companyInfoSuccess(dispatch, res)
            ).catch(error => {
                companyInfoFail(dispatch, error);
            }
            );
    };
};

const companyInfoSuccess = (dispatch, res) => {
    dispatch({
        type: GET_COMPANY_INFO_SUCCESS,
        payload: res.data,
    });
};
const companyInfoFail = (dispatch, error) => {
    dispatch({
        type: GET_COMPANY_INFO_FAIL,
    });
};

export const apiInfo = (id) => {
    return dispatch => {
        dispatch({
            type: GET_INFO,
        });
        const api = baseUrl;
        axios.get(api, {}, {})
            .then((res) =>
                apiInfoSuccess(dispatch, res)
            ).catch(error => {
                apiInfoFail(dispatch, error);
            }
            );
    };
};

const apiInfoSuccess = (dispatch, res) => {
    dispatch({
        type: GET_INFO_SUCCESS,
        payload: res.data,
    });
};
const apiInfoFail = (dispatch, error) => {
    dispatch({
        type: GET_INFO_FAIL,
    });
};
