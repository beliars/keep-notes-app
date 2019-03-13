import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { AxiosResponse } from 'axios';

import { SignInActionTypes, SignInAction } from '../actions';
import authService from '../../../../../../../shared/services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';


export const signInEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(SignInActionTypes.REQUEST),
  switchMap((action: SignInAction): Observable<Action> => {
    return authService.signIn(action.payload).pipe(
      map((res: AxiosResponse) => ({
        type: SignInActionTypes.REQUEST_SUCCESS,
        payload: res,
      })),
      catchError(error => of({
        type: SignInActionTypes.REQUEST_FAIL,
        payload: {errors: error},
      })),
    );
  }),
);
