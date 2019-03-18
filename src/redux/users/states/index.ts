import { UserModel } from '../../../shared/models/user.model';

export interface UsersState {
  entities: { [id: string]: UserModel };
  ids: string[];
  selfDataId: string;
}

export const initialState: UsersState = {
  entities: {},
  ids: [],
  selfDataId: '',
};
