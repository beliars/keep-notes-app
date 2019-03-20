import { Observable } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

import { ActionTypes, GetSelfDataAction } from '../actions';
import * as usersRequests from '../../requests/nested-states/users/actions';
import * as authRequests from '../../requests/nested-states/auth/actions';

const getSelfDataEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    ActionTypes.GET_SELF_DATA,
  ),
  map((action: GetSelfDataAction) => ({
    type: usersRequests.SelfDataGetActionTypes.REQUEST,
    payload: action.payload,
  })),
);

const setSelfDataEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    usersRequests.SelfDataGetActionTypes.REQUEST_SUCCESS,
    authRequests.SignInActionTypes.REQUEST_SUCCESS,
    authRequests.SignUpActionTypes.REQUEST_SUCCESS,
  ),
  map((
    action: usersRequests.SelfDataGetSuccessAction |
    authRequests.SignInSuccessAction |
    authRequests.SignUpSuccessAction
  ) => {
    const user = action.payload.data.user || action.payload.data;
    return {
      type: ActionTypes.SET_SELF_DATA,
      payload: user,
    }
  }),
);

export const usersEpics = [
  getSelfDataEpic,
  setSelfDataEpic,
];
