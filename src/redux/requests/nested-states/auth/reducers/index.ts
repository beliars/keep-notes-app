import { combineReducers } from 'redux';
import { reducer as signUpReducer } from '../nested-states/signup/reducers';
import { reducer as signInReducer } from '../nested-states/signin/reducers';
import { reducer as signOutReducer } from '../nested-states/signout/reducers';

export const authReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  signOut: signOutReducer,
});