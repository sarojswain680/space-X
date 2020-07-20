import { LOGIN_FAIL, LOGIN_SUCCESS, ON_LOGIN } from '../Types/index';


const initialState = {
    loading: false,
    isLoggedIn: false,
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
            return { ...state, isLoggedIn: false, loading: false };
        default:
            return state

    }
}