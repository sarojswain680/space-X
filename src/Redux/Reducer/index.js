import { combineReducers } from 'redux';
import Auth from './auth';
import Info from './info';
import Capsules from './capsules';
import Cores from './cores';

const initialState = { loadingStatus: false };

export default combineReducers({
    Auth,
    Info,
    Capsules,
    Cores
});

