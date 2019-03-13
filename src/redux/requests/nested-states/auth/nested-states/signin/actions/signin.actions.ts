import { Action } from 'redux';


const SIGNIN = 'SignIn';

export const ActionTypes = {
  REQUEST: `[${SIGNIN}] Request`,
  REQUEST_SUCCESS: `[${SIGNIN}] Request Success`,
  REQUEST_FAIL: `[${SIGNIN}] Request Failed`,
};

export class SignInAction implements Action {
  type = ActionTypes.REQUEST;

  constructor(public payload?: any) {}
}

export class SignInSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;

  constructor(public payload?: any) {}
}

export class SignInFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;

  constructor(public payload?: any) {}
}

export type Actions = SignInAction | SignInSuccessAction | SignInFailAction;