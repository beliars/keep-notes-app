import { Action } from 'redux';

const APPLICATION = 'Application';

export const ActionTypes = {
  UPDATE_APP_WIDTH: `[${APPLICATION}] Update App Width`,
};

export class UpdateAppWidthAction implements Action {
  type = ActionTypes.UPDATE_APP_WIDTH;
  
  constructor(public payload?: any) {}
}

export type Actions = UpdateAppWidthAction;