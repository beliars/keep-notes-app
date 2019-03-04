import {createStore, applyMiddleware, combineReducers} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

// states
import { ApplicationState } from './application/states';

// reducers
import { reducer as applicationReducer } from './application/reducers';

// epics
import { applicationEpics } from './application/epics';


export interface RootState {
  applicationState: ApplicationState,
}

const rootReducer = combineReducers({
  application: applicationReducer,
});

const rootEpic = combineEpics(
    ...applicationEpics,
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
