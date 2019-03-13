import { signUpEpic } from '../nested-states/signup/epics';
import { signInEpic } from '../nested-states/signin/epics';

export const authEpics = [
  signUpEpic,
  signInEpic,
];