import {combineReducers} from 'redux';
import navState from './navReducer';
import apiState from './apiReducer';

export default combineReducers({navState,apiState})
