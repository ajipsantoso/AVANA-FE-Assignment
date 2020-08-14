import {fork, all} from 'redux-saga/effects';
import submenu from './submenuSaga';

export default function* rootSaga() {
  yield all([
    fork(submenu),
  ]);
}
