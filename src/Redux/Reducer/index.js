import { combineReducers } from 'redux';
import Auth from './auth';
import Info from './info';
import Capsules from './capsules';
import Cores from './cores';
import Dragons from './dragons';
import History from './history';
import Landpad from './landpad';
import LaunchPad from './launchPad';
import Mission from './mission';
import Payload from './payload';
import Rocket from './rockets';
import Roadster from './roadster';

const initialState = { loadingStatus: false };

export default combineReducers({
    Auth,
    Info,
    Capsules,
    Cores,
    Dragons,
    History,
    Landpad,
    LaunchPad,
    Mission,
    Payload,
    Rocket,
    Roadster
});

