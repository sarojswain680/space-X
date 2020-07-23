import {
    GET_ALL_ROADSTER,




    GET_ROADSTER_FAIL, GET_ROADSTER_SUCCESS
} from '../Types/index';



const initialState = {
    loading: false,
    roadster: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ROADSTER:
            return { ...state, loading: true };
        case GET_ROADSTER_SUCCESS:
            return {
                ...state, roadster: action.payload, loading: false
            };
        case GET_ROADSTER_FAIL:
            return { ...state, loading: false };
        default:
            return state
    }
}