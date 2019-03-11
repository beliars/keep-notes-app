import { signupEpic } from '../nested-states/signup/epics';

export const authEpics = [
  signupEpic,
];