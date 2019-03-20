import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { AxiosResponse } from 'axios';

import { SignOutActionTypes, SignOutAction,  } from '../actions';
import authService from '../../../../../../../shared/services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';


export const signOutEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(SignOutActionTypes.REQUEST),
  switchMap((action: SignOutAction): Observable<Action> => {
    return authService.signOut().pipe(
      map((res: AxiosResponse) => ({
        type: SignOutActionTypes.REQUEST_SUCCESS,
        payload: res,
      })),
      catchError(error => of({
        type: SignOutActionTypes.REQUEST_FAIL,
        payload: {errors: error},
      })),
    );
  }),
);
