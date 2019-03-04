import { Action } from 'redux';

const USER = 'User';

export const ActionTypes = {
  GET_USER: `[${USER}] Get User`,
  SET_USER: `[${USER}] Set User`,
  UPDATE_USER: `[${USER}] Update User`,
};

export class GetUserAction implements Action {
  type = ActionTypes.GET_USER;
  
  constructor(public payload?: any) {}
}

export class SetUserAction implements Action {
  type = ActionTypes.SET_USER;
  
  constructor(public payload?: any) {}
}

export class UpdateUserAction implements Action {
  type = ActionTypes.UPDATE_USER;
  
  constructor(public payload?: any) {}
}

export type Actions = GetUserAction | SetUserAction | UpdateUserAction;