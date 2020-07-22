import {
    GET_ALL_MISSION,



    GET_MISSION_DETAIL,
    GET_MISSION_DETAIL_FAIL, GET_MISSION_DETAIL_SUCCESS, GET_MISSION_FAIL, GET_MISSION_SUCCESS
} from '../Types/index';



const initialState = {
    loading: false,
    missions: [],
    mission: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MISSION:
            return { ...state, loading: true };
        case GET_MISSION_SUCCESS:
            return {
                ...state, missions: action.payload, loading: false
            };
        case GET_MISSION_FAIL:
            return { ...state, loading: false };

        case GET_MISSION_DETAIL:
            return { ...state, loading: true };

        case GET_MISSION_DETAIL_SUCCESS:
            return {
                ...state, loading: false, mission: action.payload
            };
        case GET_MISSION_DETAIL_FAIL:
            return { ...state, loading: false };

        default:
            return state
    }
}