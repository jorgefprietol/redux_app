import * as types from '../actions/actionTypes';
import { register } from '../../serviceWorker';

const initialState = {
    list: [],
    loading: false,
}

const apiState = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_ALL: {
            return {
                ...state,
                list: action.payload.list,
                loading: action.payload.loading,
            }
        }
        default: return state;
    }
}

export default apiState;