import * as _ from 'lodash';

import { Actions, ActionTypes } from '../actions';
import { UserState, initialState } from '../states';
import { UserModel } from '../../../shared/models/user.model';


export function reducer(state = initialState, action: Actions): UserState {
  switch (action.type) {
    case ActionTypes.SET_USER:
      const user = new UserModel(action.payload);
      if (action.payload.userPhone) {
        user.userPhoneId = action.payload.userPhone._id;
        delete user.userPhone;
      }
      return {
        ...state,
        currentUserId: user._id,
        entities: _.unionWith([user], state.entities, (a: any, b: any) => a._id === b._id),
      }
    default:
      return state;
  }
}
