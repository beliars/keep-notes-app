import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { AxiosResponse } from 'axios';

import { ActionTypes, SignUpAction } from '../actions';
import authService from '../../../../../../../shared/services/auth.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';


export const signupEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(ActionTypes.REQUEST),
  switchMap((action: SignUpAction): Observable<Action> => {
    return authService.signup(action.payload).pipe(
      map((res: AxiosResponse) => ({
        type: ActionTypes.REQUEST_SUCCESS,
        payload: res,
      })),
      catchError(error => of({
        type: ActionTypes.REQUEST_FAIL,
        payload: {errors: error},
      })),
    );
  }),
);
