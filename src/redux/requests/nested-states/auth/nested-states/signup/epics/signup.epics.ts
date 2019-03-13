import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { AxiosResponse } from 'axios';

import { SignUpActionTypes, SignUpAction,  } from '../actions';
import authService from '../../../../../../../shared/services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';


export const signUpEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(SignUpActionTypes.REQUEST),
  switchMap((action: SignUpAction): Observable<Action> => {
    return authService.signup(action.payload).pipe(
      map((res: AxiosResponse) => ({
        type: SignUpActionTypes.REQUEST_SUCCESS,
        payload: res,
      })),
      catchError(error => of({
        type: SignUpActionTypes.REQUEST_FAIL,
        payload: {errors: error},
      })),
    );
  }),
);
