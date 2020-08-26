import * as types from '../actions/actionTypes';
import { register } from '../../serviceWorker';

const initialState = {
    title: 'Home',
}

const navState = (state = initialState, action) => {
    switch (action.type) {
        case types.NAV_CLICK: {
            return {
                ...state,
                title: action.payload.title,
            }
        }
        default: return state;
    }
}

export default navState;