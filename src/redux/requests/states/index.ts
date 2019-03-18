import { authState, AuthRequestsState } from '../nested-states/auth/states';
import { usersState, UsersRequestsState } from '../nested-states/users/states';


export interface RequestsNestedState {
  loading: boolean,
  loaded: boolean,
  errors: any,
  data: any,
}

export interface RequestsState {
  auth: AuthRequestsState,
  users: UsersRequestsState,
}

export const initialState: RequestsState = {
  auth: authState,
  users: usersState,
};