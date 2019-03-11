import { authState, AuthRequestsState } from '../nested-states/auth/states';


export interface RequestsNestedState {
  loading: boolean,
  loaded: boolean,
  errors: any,
  data: any,
}

export interface RequestsState {
  auth?: AuthRequestsState,
}

export const initialState: RequestsState = {
  auth: authState,
   //user: userState,
};