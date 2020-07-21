import {
    GET_ALL_CORES,


    GET_CORES_DETAIL,
    GET_CORES_DETAIL_FAIL,
    GET_CORES_DETAIL_SUCCESS, GET_CORES_FAIL,


    GET_CORES_PAST,
    GET_CORES_PAST_FAIL,
    GET_CORES_PAST_SUCCESS,
    GET_CORES_SUCCESS,





    GET_CORES_UPCOMING, GET_CORES_UPCOMING_FAIL,
    GET_CORES_UPCOMING_SUCCESS
} from '../Types';


const initialState = {
    loading: false,
    cores: [],
    core: {},
    upcomingCore: [],
    pastCore: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CORES:
            return { ...state, loading: true };
        case GET_CORES_SUCCESS:
            return {
                ...state, cores: action.payload, loading: false
            };
        case GET_CORES_FAIL:
            return { ...state, loading: false };

        case GET_CORES_DETAIL:
            return { ...state, loading: true };

        case GET_CORES_DETAIL_SUCCESS:
            return {
                ...state, loading: false, core: action.payload
            };
        case GET_CORES_DETAIL_FAIL:
            return { ...state, loading: false };

        case GET_CORES_PAST:
            return { ...state, loading: true };

        case GET_CORES_PAST_SUCCESS:
            return {
                ...state, loading: false, pastCore: action.payload
            };
        case GET_CORES_PAST_FAIL:
            return { ...state, loading: false };

        case GET_CORES_UPCOMING:
            return { ...state, loading: true };

        case GET_CORES_UPCOMING_SUCCESS:
            return {
                ...state, loading: false, upcomingCore: action.payload
            };
        case GET_CORES_UPCOMING_FAIL:
            return { ...state, loading: false };
        default:
            return state

    }
}