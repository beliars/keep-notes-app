import { Actions, ActionTypes } from '../actions';
import { AuthState, initialState } from '../states';

export function reducer(state = initialState, action: Actions): AuthState {
  switch (action.type) {
    case ActionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
  
    case ActionTypes.REMOVE_TOKEN: {
      return {
        ...state,
        token: '',
      };
    }
  
    case ActionTypes.SET_GUEST_IS_TRUE: {
      return {
        ...state,
        isGuest: true,
      };
    }
  
    case ActionTypes.SET_GUEST_IS_FALSE: {
      return {
        ...state,
        isGuest: false,
      };
    }
    
    default:
      return state;
  }
}
