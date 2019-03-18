import {createStore, applyMiddleware, combineReducers} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

// states
import { RequestsState } from './requests/states';
import { ApplicationState } from './application/states';
import { AuthState } from './auth/states';
import { UsersState } from './users/states';

// reducers
import { requestsReducer } from './requests/reducers';
import { reducer as formReducer } from 'redux-form';
import { reducer as applicationReducer } from './application/reducers';
import { reducer as authReducer } from './auth/reducers';
import { reducer as usersReducer } from './users/reducers';

// epics
import { requestsEpics } from './requests/epics';
import { applicationEpics } from './application/epics';
import { authEpics } from './auth/epics';
import { usersEpics } from './users/epics';


export interface RootState {
  requests: RequestsState,
  application: ApplicationState,
  auth: AuthState,
  users: UsersState,
}

const rootReducer = combineReducers({
  requests: requestsReducer,
  form: formReducer,
  application: applicationReducer,
  auth: authReducer,
  user: usersReducer,
});

const rootEpic = combineEpics(
    ...requestsEpics,
    ...applicationEpics,
    ...authEpics,
    ...usersEpics,
);

const epicMiddleware = createEpicMiddleware();

const middleware = [
  epicMiddleware,
];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

epicMiddleware.run(rootEpic);

export default store;
