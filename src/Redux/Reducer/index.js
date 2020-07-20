import { combineReducers } from 'redux';
import Auth from './auth';
import Info from './info';

const initialState = { loadingStatus: false };

export default combineReducers({
    Auth, Info
});

