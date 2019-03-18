import { Action } from 'redux';


const SELF_DATA_GET = 'SelfData Get';

export const ActionTypes = {
  REQUEST: `[${SELF_DATA_GET}] Request`,
  REQUEST_SUCCESS: `[${SELF_DATA_GET}] Request Success`,
  REQUEST_FAIL: `[${SELF_DATA_GET}] Request Failed`,
};

export class SelfDataGetAction implements Action {
  type = ActionTypes.REQUEST;

  constructor(public payload?: any) {}
}

export class SelfDataGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;

  constructor(public payload?: any) {}
}

export class SelfDataGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;

  constructor(public payload?: any) {}
}

export type Actions = SelfDataGetAction | SelfDataGetSuccessAction | SelfDataGetFailAction;