import { SelfDataGetActions, SelfDataGetActionTypes } from '../actions';
import { initialState } from '../states';
import { RequestsNestedState } from '../../../../../states';


export function reducer(state = initialState, action: SelfDataGetActions): RequestsNestedState {
  switch (action.type) {
    case SelfDataGetActionTypes.REQUEST:
      return {
        loading: true,
        loaded: false,
        errors: null,
        data: null,
      };
    case SelfDataGetActionTypes.REQUEST_SUCCESS:
    case SelfDataGetActionTypes.REQUEST_FAIL:
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
