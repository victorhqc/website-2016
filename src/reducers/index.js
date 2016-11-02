import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export let rootReducer = combineReducers({
    routing: routerReducer,
});
