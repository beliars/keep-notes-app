import { combineReducers } from 'redux';
import { authReducer } from '../nested-states/auth/reducers';

export const requestsReducer = combineReducers({
  auth: authReducer,
});