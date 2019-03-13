import { SignInActions, SignInActionTypes } from '../actions';
import { initialState } from '../states';
import { RequestsNestedState } from '../../../../../states';


export function reducer(state = initialState, action: SignInActions): RequestsNestedState {
  switch (action.type) {
    case SignInActionTypes.REQUEST:
      return {
        loading: true,
        loaded: false,
        errors: null,
        data: null,
      };
    case SignInActionTypes.REQUEST_SUCCESS:
    case SignInActionTypes.REQUEST_FAIL:
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
