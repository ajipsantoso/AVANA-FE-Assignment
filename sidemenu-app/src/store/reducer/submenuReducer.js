import { UPDATE_SHOW_DONE, UPDATE_ALLOW_DONE, CHOOSE_MENU_DONE } from '../action/actionList';
import dummyData from '../../utils/dummy-menu.json';

const initialState = {
  menuList: dummyData,
  selectedMenu: {}
};

const reducer = (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
    case UPDATE_SHOW_DONE: {
      return {...state, menuList: payload};
    }

    case UPDATE_ALLOW_DONE: {
      return {...state, menuList: payload};
    }
    
    case CHOOSE_MENU_DONE: {
      return {...state, selectedMenu: payload};
    }

    default: {
      return state;
    }
  }
};

export default reducer;