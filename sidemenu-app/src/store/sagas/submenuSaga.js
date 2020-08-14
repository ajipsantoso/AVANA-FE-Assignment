import { select, takeEvery, put, call } from 'redux-saga/effects';
import { UPDATE_ALLOW, UPDATE_SHOW, UPDATE_ALLOW_DONE, UPDATE_SHOW_DONE } from '../action/actionList';

const findMenu = (listMenu, payload) => {
  listMenu.forEach(function recursive(itemMenu, idx) {
    if (itemMenu.id === payload.id) {
      
      console.log('ketemu', {[payload.type]: payload.value})
      itemMenu[payload.type]= payload.value
    }
    Array.isArray(itemMenu.childs) && itemMenu.childs.forEach(recursive);
  })
  return listMenu
}
const getList = state => state.submenu.menuList

function* updateShow(action) {
  const { payload } = action;
  payload.type = 'isShowed'
  const state = yield select(getList);
  let listMenu = yield findMenu(state, payload);
  yield put({type: UPDATE_SHOW_DONE, payload: [...listMenu]});
}

function* updateAllow(action) {
  const { payload } = action;
  payload.type = 'isAllowed';
  const state = yield select(getList);
  let listMenu = yield findMenu(state, payload);
  yield put({type: UPDATE_ALLOW_DONE, payload: [...listMenu]});
}

function* submenuSaga() {
  yield takeEvery(UPDATE_ALLOW, updateAllow);
  yield takeEvery(UPDATE_SHOW, updateShow);
}

export default submenuSaga;