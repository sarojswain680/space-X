import {
    GET_ALL_LANDPAD,



    GET_LANDPAD_DETAIL,
    GET_LANDPAD_DETAIL_FAIL, GET_LANDPAD_DETAIL_SUCCESS, GET_LANDPAD_FAIL, GET_LANDPAD_SUCCESS
} from '../Types';


const initialState = {
    loading: false,
    landpads: [],
    landpad: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_LANDPAD:
            return { ...state, loading: true };
        case GET_LANDPAD_SUCCESS:
            return {
                ...state, landpads: action.payload, loading: false
            };
        case GET_LANDPAD_FAIL:
            return { ...state, loading: false };

        case GET_LANDPAD_DETAIL:
            return { ...state, loading: true };

        case GET_LANDPAD_DETAIL_SUCCESS:
            return {
                ...state, loading: false, landpad: action.payload
            };
        case GET_LANDPAD_DETAIL_FAIL:
            return { ...state, loading: false };

        default:
            return state
    }
}