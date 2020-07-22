import {
    GET_ALL_DRAGONS,


    GET_DRAGONS_DETAIL,
    GET_DRAGONS_DETAIL_FAIL, GET_DRAGONS_DETAIL_SUCCESS, GET_DRAGONS_FAIL, GET_DRAGONS_SUCCESS
} from '../Types/index';


const initialState = {
    loading: false,
    dragons: [],
    dragon: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DRAGONS:
            return { ...state, loading: true };
        case GET_DRAGONS_SUCCESS:
            return {
                ...state, dragons: action.payload, loading: false
            };
        case GET_DRAGONS_FAIL:
            return { ...state, loading: false };

        case GET_DRAGONS_DETAIL:
            return { ...state, loading: true };

        case GET_DRAGONS_DETAIL_SUCCESS:
            return {
                ...state, loading: false, dragon: action.payload
            };
        case GET_DRAGONS_DETAIL_FAIL:
            return { ...state, loading: false };

        default:
            return state
    }
}