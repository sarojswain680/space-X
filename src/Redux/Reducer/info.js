import {
    GET_COMPANY_INFO,
    GET_COMPANY_INFO_FAIL,
    GET_COMPANY_INFO_SUCCESS,
    GET_INFO, GET_INFO_FAIL,
    GET_INFO_SUCCESS
} from '../Types';


const initialState = {
    loading: false,
    company: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY_INFO:
            return { ...state, loading: true };
        case GET_COMPANY_INFO_SUCCESS:
            return {
                ...state, company: action.payload, loading: false
            };
        case GET_COMPANY_INFO_FAIL:
            return { ...state, loading: true };

        case GET_INFO:
            return { ...state, loading: true };
        case GET_INFO_SUCCESS:
            return {
                ...state, company: action.payload, loading: false
            };
        case GET_INFO_FAIL:
            return { ...state, loading: true };
        default:
            return state

    }
}