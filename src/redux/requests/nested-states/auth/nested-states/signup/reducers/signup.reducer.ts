import { SignUpActions, SignUpActionTypes } from '../actions';
import { initialState } from '../states';
import { RequestsNestedState } from '../../../../../states';


export function reducer(state = initialState, action: SignUpActions): RequestsNestedState {
  switch (action.type) {
    case SignUpActionTypes.REQUEST:
      return {
        loading: true,
        loaded: false,
        errors: null,
        data: null,
      };
    case SignUpActionTypes.REQUEST_SUCCESS:
    case SignUpActionTypes.REQUEST_FAIL:
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
