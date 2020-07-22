import {
    GET_ALL_LAUNCHPAD,



    GET_LAUNCHPAD_DETAIL,
    GET_LAUNCHPAD_DETAIL_FAIL, GET_LAUNCHPAD_DETAIL_SUCCESS, GET_LAUNCHPAD_FAIL, GET_LAUNCHPAD_SUCCESS
} from '../Types/index';



const initialState = {
    loading: false,
    launchPads: [],
    launchPad: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_LAUNCHPAD:
            return { ...state, loading: true };
        case GET_LAUNCHPAD_SUCCESS:
            return {
                ...state, launchPads: action.payload, loading: false
            };
        case GET_LAUNCHPAD_FAIL:
            return { ...state, loading: false };

        case GET_LAUNCHPAD_DETAIL:
            return { ...state, loading: true };

        case GET_LAUNCHPAD_DETAIL_SUCCESS:
            return {
                ...state, loading: false, launchPad: action.payload
            };
        case GET_LAUNCHPAD_DETAIL_FAIL:
            return { ...state, loading: false };

        default:
            return state
    }
}