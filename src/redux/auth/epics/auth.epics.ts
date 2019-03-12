import { Observable } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

import * as authRequests from '../../requests/nested-states/auth/actions';
import { ActionTypes, SignUpAction } from '../actions';

const signupEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(ActionTypes.SIGN_UP),
  map((action: SignUpAction) => ({
    type: authRequests.ActionTypes.REQUEST,
    payload: action.payload,
  })),
);

export const authEpics = [
  signupEpic,
];
