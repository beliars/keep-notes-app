import { Actions, ActionTypes } from '../actions';
import { ApplicationState, initialState } from '../states';

export function reducer(state = initialState, action: Actions): ApplicationState {
  switch (action.type) {
    case ActionTypes.UPDATE_APP_WIDTH: {
      return {
        ...state,
        appWidth: action.payload,
      };
    }
    case ActionTypes.TOGGLE_SIDEBAR: {
      return {
        ...state,
        isShowSidebar: !state.isShowSidebar,
      };
    }
    default:
      return state;
  }
}
