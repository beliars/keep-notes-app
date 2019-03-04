import { Observable } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { ignoreElements, map, switchMap, tap } from 'rxjs/operators';

import { ActionTypes, SetUserAction, } from '../actions';
import * as authRequest from '../../request/nested-states/auth/actions';
import * as userRequest from '../../request/nested-states/user/actions';
import navService from '../../../shared/services/nav.service';
import userService from '../../../shared/services/user.service';


const setCurrentUserEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(
    authRequest.SigninActionTypes.REQUEST_SUCCESS,
    authRequest.SignupActionTypes.REQUEST_SUCCESS,
    authRequest.FBSigninActionTypes.REQUEST_SUCCESS,
    authRequest.FBSignupActionTypes.REQUEST_SUCCESS,
    userRequest.UserUpdateActionTypes.REQUEST_SUCCESS,
  ),
  map((action:
         authRequest.SigninSuccessAction |
         authRequest.SignupSuccessAction |
         authRequest.FBSigninSuccessAction |
         authRequest.FBSignupSuccessAction |
         userRequest.UserUpdateSuccessAction
  ) => {
    const data = action.payload.data;
    const payload = data.signin || data.signup || data.signinfb || data.signupfb || data.updateSelf;
    return {
      type: ActionTypes.SET_USER,
      payload: {...payload, type: action.type},
    }
  }),
);

const setUserToStorageEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(ActionTypes.SET_USER),
  switchMap((action: SetUserAction) => {
    const {authToken, type, ...user} = action.payload;
    return userService.setUser(user).pipe(
      tap(async (action: SetUserAction) => {
        const userPhone = user.userPhone;
        if (!userPhone || userPhone.status === 'INACTIVE') {
          return navService.navigate('SignupSendCodeScreen');
        }
        if (userPhone.status === 'PENDING') {
          return navService.navigate('SignupVerifyCodeScreen');
        }
        return navService.navigate('MainNavigator');
      }),
      ignoreElements(),
    );
  }),
);

const updateUserEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(ActionTypes.UPDATE_USER),
  map((action: SetUserAction) => ({
    type: userRequest.UserUpdateActionTypes.REQUEST,
    payload: action.payload,
  })),
);

export const userEpics = [
  setCurrentUserEpic,
  setUserToStorageEpic,
  updateUserEpic,
];
