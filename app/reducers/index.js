import { combineReducers } from 'redux';
/********* ********* ***********/
/* IMPORT YOUR REDUCERS HERE */
/******** ********* **********/
import ExampleReducer from './example-reducer.js'

// pass key:value (key name:reducer) into this function
const rootReducer = combineReducers({
    state: (state = {}) => state
});

export default rootReducer;
