export const UPDATE_SHOW = 'UPDATE_SHOW';
export const UPDATE_SHOW_DONE = 'UPDATE_SHOW_DONE';
export const UPDATE_ALLOW = 'UPDATE_ALLOW';
export const UPDATE_ALLOW_DONE = 'UPDATE_ALLOW_DONE';

export const updateShow = (payload) => {
  return {
    type: UPDATE_SHOW,
    payload: payload
  }
}

export const updateAllow = (payload) => {
  return {
    type: UPDATE_ALLOW,
    payload: payload
  }
}