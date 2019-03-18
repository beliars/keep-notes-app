import { authEpics } from '../nested-states/auth/epics';
import { usersEpics } from '../nested-states/users/epics';

export const requestsEpics = [
  ...authEpics,
  ...usersEpics,
];