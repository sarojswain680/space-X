import {
    GET_ALL_PAYLOAD,



    GET_PAYLOAD_DETAIL,
    GET_PAYLOAD_DETAIL_FAIL, GET_PAYLOAD_DETAIL_SUCCESS, GET_PAYLOAD_FAIL, GET_PAYLOAD_SUCCESS
} from '../Types/index';



const initialState = {
    loading: false,
    payloads: [],
    payload: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PAYLOAD:
            return { ...state, loading: true };
        case GET_PAYLOAD_SUCCESS:
            return {
                ...state, payloads: action.payload, loading: false
            };
        case GET_PAYLOAD_FAIL:
            return { ...state, loading: false };

        case GET_PAYLOAD_DETAIL:
            return { ...state, loading: true };

        case GET_PAYLOAD_DETAIL_SUCCESS:
            return {
                ...state, loading: false, payload: action.payload
            };
        case GET_PAYLOAD_DETAIL_FAIL:
            return { ...state, loading: false };
        default:
            return state
    }
}