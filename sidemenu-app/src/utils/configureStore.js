import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../store/sagas/sagas';
import reducers from '../store/reducer/reducer';

const sagaMiddleWare = createSagaMiddleWare();

let createStoreWithMiddleware = createStore(
  reducers,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default createStoreWithMiddleware;