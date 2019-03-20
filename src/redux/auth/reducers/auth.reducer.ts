import { Actions, ActionTypes } from '../actions';
import { AuthState, initialState } from '../states';

export function reducer(state = initialState, action: Actions): AuthState {
  switch (action.type) {
    case ActionTypes.SET_SESSION_DATA: {
      return {
        ...state,
        selfId: action.payload.selfId,
        token: action.payload.token,
        isGuest: false,
      };
    }
  
    case ActionTypes.REMOVE_SESSION_DATA: {
      return {
        ...state,
        selfId: '',
        token: '',
        isGuest: true,
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
