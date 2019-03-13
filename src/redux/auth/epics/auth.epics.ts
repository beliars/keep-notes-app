import { Observable } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { ignoreElements, map, switchMap, tap } from 'rxjs/operators';
import * as _ from 'lodash';

import * as authRequests from '../../requests/nested-states/auth/actions';
import { ActionTypes, SignInAction, SignUpAction } from '../actions';
import authService from '../../../shared/services/auth.service';

const signUpEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    ActionTypes.SIGN_UP,
  ),
  map((action: SignUpAction) => ({
    type: authRequests.SignUpActionTypes.REQUEST,
    payload: action.payload,
  })),
);

const signInEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    ActionTypes.SIGN_IN,
  ),
  map((action: SignInAction) => ({
    type: authRequests.SignInActionTypes.REQUEST,
    payload: action.payload,
  })),
);

const successAuthEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    authRequests.SignUpActionTypes.REQUEST_SUCCESS,
    authRequests.SignInActionTypes.REQUEST_SUCCESS,
  ),
  map((action: authRequests.SignUpSuccessAction) => {
    const data = action.payload.data;
    const token = _.get(data, 'token.id');
    return {
      type: ActionTypes.SET_TOKEN,
      payload: token,
    }
  }),
);

const setTokenEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    ActionTypes.SET_TOKEN,
  ),
  tap((action: authRequests.SignUpSuccessAction) => {
    debugger;
    authService.setToken(action.payload);
  }),
  map(() => ({type: ActionTypes.SET_GUEST_IS_FALSE})),
);

export const authEpics = [
  signUpEpic,
  signInEpic,
  successAuthEpic,
  setTokenEpic,
];
