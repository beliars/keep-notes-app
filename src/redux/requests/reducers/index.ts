import { combineReducers } from 'redux';
import { authReducer } from '../nested-states/auth/reducers';
import { usersReducer } from '../nested-states/users/reducers';

export const requestsReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});