import { UserModel } from '../../../shared/models/user.model';


export interface UserState {
  currentUserId?: string,
  entities?: UserModel[],
}

export const initialState: UserState = {
  currentUserId: undefined,
  entities: [],
};
