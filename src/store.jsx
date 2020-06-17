import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import Sagas from './sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
   allReducers,
applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(Sagas);

export default store;