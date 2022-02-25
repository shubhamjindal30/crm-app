import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { watcherSaga } from './rootSaga';
import regionReducer from '../features/region/reducer';

const rootReducer = combineReducers({
  region: regionReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
