import { Action } from 'redux';

const AUTH = 'Auth';

export const ActionTypes = {
  SIGN_UP: `[${AUTH}] Sign Up`,
  SIGN_IN: `[${AUTH}] Sign In`,
  
  SET_TOKEN: `[${AUTH}] Set Token`,
  REMOVE_TOKEN: `[${AUTH}] Remove Token`,
  
  SET_GUEST_IS_TRUE: `[${AUTH}] Set Guest Is True`,
  SET_GUEST_IS_FALSE: `[${AUTH}] Set Guest Is False`,
};

export class SignUpAction implements Action {
  type = ActionTypes.SIGN_UP;
  
  constructor(public payload?: any) {}
}

export class SignInAction implements Action {
  type = ActionTypes.SIGN_IN;
  
  constructor(public payload?: any) {}
}

export class SetTokenAction implements Action {
  type = ActionTypes.SET_TOKEN;
  
  constructor(public payload?: any) {}
}

export class RemoveTokenAction implements Action {
  type = ActionTypes.REMOVE_TOKEN;
  
  constructor(public payload?: any) {}
}

export class SetGuestIsTrueAction implements Action {
  type = ActionTypes.SET_GUEST_IS_TRUE;
  
  constructor(public payload?: string) {
  }
}

export class SetGuestIsFalseAction implements Action {
  type = ActionTypes.SET_GUEST_IS_FALSE;
  
  constructor(public payload?: string) {
  }
}

export type Actions = SignUpAction | SignInAction | SetTokenAction |
  RemoveTokenAction | SetGuestIsTrueAction | SetGuestIsFalseAction;