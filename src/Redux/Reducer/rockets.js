import {
    GET_ALL_ROCKETS,



    GET_ROCKETS_DETAIL,
    GET_ROCKETS_DETAIL_FAIL, GET_ROCKETS_DETAIL_SUCCESS, GET_ROCKETS_FAIL, GET_ROCKETS_SUCCESS
} from '../Types/index';


const initialState = {
    loading: false,
    rockets: [],
    rocket: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ROCKETS:
            return { ...state, loading: true };
        case GET_ROCKETS_SUCCESS:
            return {
                ...state, rockets: action.payload, loading: false
            };
        case GET_ROCKETS_FAIL:
            return { ...state, loading: false };

        case GET_ROCKETS_DETAIL:
            return { ...state, loading: true };

        case GET_ROCKETS_DETAIL_SUCCESS:
            return {
                ...state, loading: false, rocket: action.payload
            };
        case GET_ROCKETS_DETAIL_FAIL:
            return { ...state, loading: false };
        default:
            return state
    }
}