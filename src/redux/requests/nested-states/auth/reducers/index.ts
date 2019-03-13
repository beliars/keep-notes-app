import { combineReducers } from 'redux';
import { reducer as signUpReducer } from '../nested-states/signup/reducers';
import { reducer as signInReducer } from '../nested-states/signin/reducers';

export const authReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
});