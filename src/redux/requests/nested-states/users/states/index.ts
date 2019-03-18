import { RequestsNestedState } from '../../../states';
import { initialState as selfDataGetState } from '../nested-states/selfdata-get/states';


export interface UsersRequestsState {
  selfDataGet: RequestsNestedState,
}

export const usersState = {
  selfDataGet: selfDataGetState,
} as UsersRequestsState;