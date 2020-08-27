import {combineReducers} from 'redux';
import navState from './navReducer';
import apiState from './apiReducer';
import {reducer as form} from 'redux-Form';

export default combineReducers({navState,apiState, form})
