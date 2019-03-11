import { authEpics } from '../nested-states/auth/epics';

export const requestsEpics = [
  ...authEpics,
];