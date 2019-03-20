import { Action } from 'redux';

const USERS = 'Users';

export const ActionTypes = {
  GET_SELF_DATA: `[${USERS}] Get Self Data`,
  SET_SELF_DATA: `[${USERS}] Set Self Data`,
  UPDATE_SELF_DATA: `[${USERS}] Update Self Data`,
  CLEAR_SELF_DATA: `[${USERS}] Clear Self Data`,
};

export class GetSelfDataAction implements Action {
  type = ActionTypes.GET_SELF_DATA;
  
  constructor(public payload?: any) {}
}

export class SetSelfDataAction implements Action {
  type = ActionTypes.SET_SELF_DATA;
  
  constructor(public payload?: any) {}
}

export class UpdateSelfDataAction implements Action {
  type = ActionTypes.UPDATE_SELF_DATA;
  
  constructor(public payload?: any) {}
}

export class ClearSelfDataAction implements Action {
  type = ActionTypes.CLEAR_SELF_DATA;
  
  constructor(public payload?: any) {}
}

export type Actions = GetSelfDataAction | SetSelfDataAction | UpdateSelfDataAction | ClearSelfDataAction;