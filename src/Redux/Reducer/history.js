import {
    GET_ALL_HISTORY,


    GET_HISTORY_DETAIL,
    GET_HISTORY_DETAIL_SUCCESS, GET_HISTORY_FAIL,
    GET_HISTORY_SUCCESS, GET_HISTORY_DETAIL_FAIL
} from '../Types/index';


const initialState = {
    loading: false,
    historys: [],
    history: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_HISTORY:
            return { ...state, loading: true };
        case GET_HISTORY_SUCCESS:
            return {
                ...state, historys: action.payload, loading: false
            };
        case GET_HISTORY_FAIL:
            return { ...state, loading: false };

        case GET_HISTORY_DETAIL:
            return { ...state, loading: true };

        case GET_HISTORY_DETAIL_SUCCESS:
            return {
                ...state, loading: false, history: action.payload
            };
        case GET_HISTORY_DETAIL_FAIL:
            return { ...state, loading: false };

        default:
            return state
    }
}