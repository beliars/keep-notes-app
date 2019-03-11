import { combineReducers } from 'redux';
import { reducer as signupReducer } from '../nested-states/signup/reducers';

export const authReducer = combineReducers({
  signup: signupReducer,
});