import { select, takeEvery, put } from 'redux-saga/effects';
import {
  UPDATE_ALLOW,
  UPDATE_SHOW,
  UPDATE_ALLOW_DONE,
  UPDATE_SHOW_DONE,
  CHOOSE_MENU,
  CHOOSE_MENU_DONE
} from '../action/actionList';

const findMenu = (listMenu, payload) => {
  listMenu.forEach(function recursive(itemMenu, idx) {
    if (itemMenu.id === payload.id) {
      itemMenu[payload.type]= payload.value
    }
    Array.isArray(itemMenu.childs) && itemMenu.childs.forEach(recursive);
  })
  return listMenu
}

const getList = state => state.submenu.menuList;

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

function* chooseMenu(action) {
  const { payload } = action;
  yield put({type: CHOOSE_MENU_DONE, payload: payload});
}

function* submenuSaga() {
  yield takeEvery(UPDATE_ALLOW, updateAllow);
  yield takeEvery(UPDATE_SHOW, updateShow);
  yield takeEvery(CHOOSE_MENU, chooseMenu);
}

export default submenuSaga;