import {createStore, applyMiddleware, combineReducers} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

// states
import { ApplicationState } from './application/states';
import { RequestsState } from './requests/states';

// reducers
import { reducer as formReducer } from 'redux-form';
import { reducer as applicationReducer } from './application/reducers';
import { requestsReducer } from './requests/reducers';

// epics
import { applicationEpics } from './application/epics';
import { requestsEpics } from './requests/epics';


export interface RootState {
  application: ApplicationState,
  requests: RequestsState,
}

const rootReducer = combineReducers({
  application: applicationReducer,
  form: formReducer,
  requests: requestsReducer,
});

const rootEpic = combineEpics(
    ...applicationEpics,
    //...requestsEpics,
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
