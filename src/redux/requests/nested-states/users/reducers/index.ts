import { combineReducers } from 'redux';
import { reducer as selfDataGetReducer } from '../nested-states/selfdata-get/reducers';

export const usersReducer = combineReducers({
  selfDataGet: selfDataGetReducer,
});