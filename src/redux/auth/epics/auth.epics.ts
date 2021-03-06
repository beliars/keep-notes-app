import { Observable } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { ignoreElements, map, tap } from 'rxjs/operators';
import * as _ from 'lodash';

import * as authRequests from '../../requests/nested-states/auth/actions';
import * as usersRequests from '../../requests/nested-states/users/actions';
import { ActionTypes, SetGuestIsTrueAction, SignInAction, SignOutAction, SignUpAction } from '../actions';
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

const signOutEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    ActionTypes.SIGN_OUT,
  ),
  map((action: SignOutAction) => ({
    type: authRequests.SignOutActionTypes.REQUEST,
    payload: action.payload,
  })),
);

const successAuthEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    authRequests.SignUpActionTypes.REQUEST_SUCCESS,
    authRequests.SignInActionTypes.REQUEST_SUCCESS,
  ),
  map((action: authRequests.SignUpSuccessAction | authRequests.SignInSuccessAction) => {
    const data = action.payload.data;
    const token = _.get(data, 'token.id');
    const selfId = _.get(data, 'user._id');
    return {
      type: ActionTypes.SET_SESSION_DATA,
      payload: {token, selfId},
    }
  }),
);

const successGetSelfDataEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    usersRequests.SelfDataGetActionTypes.REQUEST_SUCCESS,
  ),
  map((action: authRequests.SignUpSuccessAction) => {
    const selfId = _.get(action.payload.data, '_id');
    const token = authService.getSessionToken;
    return {
      type: ActionTypes.SET_SESSION_DATA,
      payload: {token, selfId},
    }
  }),
);

const failAuthEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    authRequests.SignUpActionTypes.REQUEST_FAIL,
    authRequests.SignInActionTypes.REQUEST_FAIL,
    usersRequests.SelfDataGetActionTypes.REQUEST_FAIL,
  ),
  map((action: authRequests.SignUpFailAction | authRequests.SignInFailAction | authRequests.SignUpSuccessAction) => {
    return {type: ActionTypes.SET_GUEST_IS_TRUE}
  }),
);

const signOutSuccessEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    authRequests.SignOutActionTypes.REQUEST_SUCCESS,
  ),
  map((action: authRequests.SignOutSuccessAction) => {
    return {type: ActionTypes.REMOVE_SESSION_DATA}
  }),
);

const setSessionDataEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    ActionTypes.SET_SESSION_DATA,
  ),
  tap((action: authRequests.SignUpSuccessAction) => {
    authService.setSessionData(action.payload);
  }),
  ignoreElements(),
);

const removeSessionDataEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    ActionTypes.SET_GUEST_IS_TRUE,
    ActionTypes.REMOVE_SESSION_DATA,
  ),
  tap(() => authService.removeSessionData()),
  ignoreElements(),
);

export const authEpics = [
  signUpEpic,
  signInEpic,
  signOutEpic,
  successAuthEpic,
  failAuthEpic,
  successGetSelfDataEpic,
  setSessionDataEpic,
  removeSessionDataEpic,
  signOutSuccessEpic,
];
