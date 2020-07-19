import { GET_ALL_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, ON_LOGIN } from "../Types/index";

const initialState = {
    loading: false,
    isLoggedIn: false,
    users: [],
    userLoading: false,
    loginError: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN:
            return { ...state, loading: true, isLoggedIn: false };
        case LOGIN_SUCCESS:
            return {
                ...state, isLoggedIn: true, loading: false
            };
        case LOGIN_FAIL:
            return { ...state, isLoggedIn: false, loading: false, loginError: 'Invalid credentials' };
        case GET_ALL_DATA:
            return { ...state, userLoading: true, users: [] };
        case GET_DATA_SUCCESS:
            return {
                ...state, userLoading: false, users: action.payload.user
            };
        case GET_DATA_FAIL:
            return { ...state, userLoading: true, users: [] };
        default:
            return state

    }
}