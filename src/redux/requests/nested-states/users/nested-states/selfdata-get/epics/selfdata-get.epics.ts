import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { AxiosResponse } from 'axios';

import { SelfDataGetActionTypes, SelfDataGetAction } from '../actions';
import usersService from '../../../../../../../shared/services/users.service';
import { catchError, map, switchMap } from 'rxjs/operators';


export const selfDataGetEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(SelfDataGetActionTypes.REQUEST),
  switchMap((action: SelfDataGetAction): Observable<Action> => {
    return usersService.getSelfData(action.payload).pipe(
      map((res: AxiosResponse) => ({
        type: SelfDataGetActionTypes.REQUEST_SUCCESS,
        payload: res,
      })),
      catchError(error => of({
        type: SelfDataGetActionTypes.REQUEST_FAIL,
        payload: {errors: error},
      })),
    );
  }),
);
