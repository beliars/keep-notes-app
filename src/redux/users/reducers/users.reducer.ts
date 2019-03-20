import * as _ from 'lodash';

import { Actions, ActionTypes } from '../actions';
import { UsersState, initialState } from '../states';
import { updateEntities } from '../../utils/util';
import { UserModel } from '../../../shared/models/user.model';


export function reducer(state = initialState, action: Actions): UsersState {
  switch (action.type) {
    
    case ActionTypes.SET_SELF_DATA: {
      const updatedEntities = updateEntities(action.payload, UserModel);
      const user = new UserModel(action.payload);
      return {
        ...state,
        entities: Object.assign({}, state.entities, updatedEntities.entities),
        ids: _.union(state.ids, updatedEntities.entitiesIds),
        selfDataId: user._id,
      };
    }
  
    case ActionTypes.CLEAR_SELF_DATA: {
      return {
        ...state,
        selfDataId: '',
      };
    }
    
    default:
      return state;
  }
}
