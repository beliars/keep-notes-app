import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';

import { Actions, ActionTypes } from '../actions';
//import authService from '../../../../../../../shared/services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';


export const signupEpic = (action$: Observable<Action>) => action$.pipe(
//  ofType(SignupActionTypes.REQUEST),
//  switchMap((action: SignupAction): Observable<Action> => {
//    return authService.signup(action.payload).pipe(
//      map((res: FetchResult) => ({
//        type: res.errors ? SignupActionTypes.REQUEST_FAIL : SignupActionTypes.REQUEST_SUCCESS,
//        payload: res,
//      })),
//    );
//  }),
//  catchError(error => of({
//    type: SignupActionTypes.REQUEST_FAIL,
//    payload: {errors: error},
//  })),
);
