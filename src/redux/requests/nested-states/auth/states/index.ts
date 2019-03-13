import { RequestsNestedState } from '../../../states';
import { initialState as signUpState } from '../nested-states/signup/states';
import { initialState as signInState } from '../nested-states/signin/states';


export interface AuthRequestsState {
  signUp: RequestsNestedState,
  signIn: RequestsNestedState,
}

export const authState = {
  signUp: signUpState,
  signIn: signInState,
} as AuthRequestsState;