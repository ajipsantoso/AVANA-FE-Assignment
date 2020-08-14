import { UPDATE_SHOW_DONE, UPDATE_ALLOW_DONE } from '../action/actionList';

const initialState = {
  menuList: [
    { "id": "dashboard", "isShowed": true, "isAllowed": true },
    {
      "id": "hq",
      "isShowed": false,
      "isAllowed": false,
      "childs": [
        { "id": "hq_stockist", "isShowed": false, "isAllowed": false },
        { "id": "hq_dropship_affiliate", "isShowed": false, "isAllowed": false }
      ]
    }
  ]
};

const reducer = (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
    case UPDATE_SHOW_DONE: {
      // const {id, value} = payload;
      console.log('updated', payload)
      return {...state, menuList: payload};
    }

    case UPDATE_ALLOW_DONE: {
      // const {id, value} = payload;
      console.log('updated', payload)
      return {...state, menuList: payload};
    }

    default: {
      return state;
    }
  }
};

export default reducer;