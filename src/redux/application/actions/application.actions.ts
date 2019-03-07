import { Action } from 'redux';

const APPLICATION = 'Application';

export const ActionTypes = {
  UPDATE_APP_WIDTH: `[${APPLICATION}] Update App Width`,
  TOGGLE_SIDEBAR: `[${APPLICATION}] Toggle Sidebar`,
};

export class UpdateAppWidthAction implements Action {
  type = ActionTypes.UPDATE_APP_WIDTH;
  
  constructor(public payload?: any) {}
}

export class ToggleSidebarAction implements Action {
  type = ActionTypes.TOGGLE_SIDEBAR;
  
  constructor(public payload?: any) {}
}

export type Actions = UpdateAppWidthAction | ToggleSidebarAction;