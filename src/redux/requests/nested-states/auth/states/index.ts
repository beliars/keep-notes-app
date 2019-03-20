import { RequestsNestedState } from '../../../states';
import { initialState as signUpState } from '../nested-states/signup/states';
import { initialState as signInState } from '../nested-states/signin/states';
import { initialState as signOutState } from '../nested-states/signout/states';


export interface AuthRequestsState {
  signUp: RequestsNestedState,
  signIn: RequestsNestedState,
  signOut: RequestsNestedState,
}

export const authState = {
  signUp: signUpState,
  signIn: signInState,
  signOut: signOutState,
} as AuthRequestsState;