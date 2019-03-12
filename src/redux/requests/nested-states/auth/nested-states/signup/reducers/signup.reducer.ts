import { Actions, ActionTypes } from '../actions';
import { initialState } from '../states';
import { RequestsNestedState } from '../../../../../states';


export function reducer(state = initialState, action: Actions): RequestsNestedState {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return {
        loading: true,
        loaded: false,
        errors: null,
        data: null,
      };
    case ActionTypes.REQUEST_SUCCESS:
    case ActionTypes.REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        errors: action.payload.errors,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
