import { RequestsNestedState } from '../../../states';
import { initialState as signupState } from '../nested-states/signup/states';


export interface AuthRequestsState {
  signup: RequestsNestedState,
}

export const authState = {
  signup: signupState,
} as AuthRequestsState;