import {
    GET_ALL_CAPSULES,


    GET_CAPSULES_DETAIL,
    GET_CAPSULES_DETAIL_FAIL,
    GET_CAPSULES_DETAIL_SUCCESS, GET_CAPSULES_FAIL,


    GET_CAPSULES_PAST,
    GET_CAPSULES_PAST_FAIL,
    GET_CAPSULES_PAST_SUCCESS,
    GET_CAPSULES_SUCCESS,





    GET_CAPSULES_UPCOMING, GET_CAPSULES_UPCOMING_FAIL,
    GET_CAPSULES_UPCOMING_SUCCESS
} from '../Types/index';


const initialState = {
    loading: false,
    capsules: [],
    capsule: {},
    upcomingCapsule: [],
    pastCapsule: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CAPSULES:
            return { ...state, loading: true };
        case GET_CAPSULES_SUCCESS:
            return {
                ...state, capsules: action.payload, loading: false
            };
        case GET_CAPSULES_FAIL:
            return { ...state, loading: false };

        case GET_CAPSULES_DETAIL:
            return { ...state, loading: true };

        case GET_CAPSULES_DETAIL_SUCCESS:
            return {
                ...state, loading: false, capsule: action.payload
            };
        case GET_CAPSULES_DETAIL_FAIL:
            return { ...state, loading: false };

        case GET_CAPSULES_PAST:
            return { ...state, loading: true };

        case GET_CAPSULES_PAST_SUCCESS:
            return {
                ...state, loading: false, pastCapsule: action.payload
            };
        case GET_CAPSULES_PAST_FAIL:
            return { ...state, loading: false };

        case GET_CAPSULES_UPCOMING:
            return { ...state, loading: true };

        case GET_CAPSULES_UPCOMING_SUCCESS:
            return {
                ...state, loading: false, upcomingCapsule: action.payload
            };
        case GET_CAPSULES_UPCOMING_FAIL:
            return { ...state, loading: false };
        default:
            return state

    }
}