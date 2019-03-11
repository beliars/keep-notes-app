import { SignupActions, SignupActionTypes } from '../actions';
import { initialState } from '../states';
import { RequestsNestedState } from '../../../../../states';


export function reducer(state = initialState, action: SignupActions): RequestsNestedState {
  switch (action.type) {
    case SignupActionTypes.REQUEST:
      return {
        loading: true,
        loaded: false,
        errors: null,
        data: null,
      };
    case SignupActionTypes.REQUEST_SUCCESS:
    case SignupActionTypes.REQUEST_FAIL:
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
