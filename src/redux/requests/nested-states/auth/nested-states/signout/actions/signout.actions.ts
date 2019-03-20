import { Action } from 'redux';


const SIGN_OUT = 'Sign Out';

export const ActionTypes = {
  REQUEST: `[${SIGN_OUT}] Request`,
  REQUEST_SUCCESS: `[${SIGN_OUT}] Request Success`,
  REQUEST_FAIL: `[${SIGN_OUT}] Request Failed`,
};

export class SignOutAction implements Action {
  type = ActionTypes.REQUEST;

  constructor(public payload?: any) {}
}

export class SignOutSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;

  constructor(public payload?: any) {}
}

export class SignOutFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;

  constructor(public payload?: any) {}
}

export type Actions = SignOutAction | SignOutSuccessAction | SignOutFailAction;