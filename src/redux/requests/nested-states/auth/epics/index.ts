import { signUpEpic } from '../nested-states/signup/epics';
import { signInEpic } from '../nested-states/signin/epics';
import { signOutEpic } from '../nested-states/signout/epics';

export const authEpics = [
  signUpEpic,
  signInEpic,
  signOutEpic,
];