import { Observable } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import { ActionTypes, UpdateAppWidthAction } from '../actions';

const updateAppWidthEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(ActionTypes.UPDATE_APP_WIDTH),
  tap((action: UpdateAppWidthAction) => console.log(action.payload)),
  ignoreElements(),
);

export const applicationEpics = [
  updateAppWidthEpic
];
