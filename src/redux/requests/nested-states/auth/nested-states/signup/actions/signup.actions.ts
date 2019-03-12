import { Action } from 'redux';


const SIGNUP = 'Signup';

export const ActionTypes = {
  REQUEST: `[${SIGNUP}] Request`,
  REQUEST_SUCCESS: `[${SIGNUP}] Request Success`,
  REQUEST_FAIL: `[${SIGNUP}] Request Failed`,
};

export class SignUpAction implements Action {
  type = ActionTypes.REQUEST;

  constructor(public payload?: any) {}
}

export class SignUpSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;

  constructor(public payload?: any) {}
}

export class SignUpFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;

  constructor(public payload?: any) {}
}

export type Actions = SignUpAction | SignUpSuccessAction | SignUpFailAction;