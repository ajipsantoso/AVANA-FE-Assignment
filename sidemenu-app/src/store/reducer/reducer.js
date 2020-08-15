import {combineReducers} from 'redux';
import submenu from './submenuReducer';

const appReducer =  combineReducers({
  submenu
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;