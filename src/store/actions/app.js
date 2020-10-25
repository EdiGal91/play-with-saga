import { SHOW_ALERT } from "../types";

export function showAlert(text, type = "success", ttl = 3000) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type}
    })
    setTimeout(() => {
      dispatch({
        type: SHOW_ALERT,
        payload: {text:''}
      })
    }, ttl);
  }
}
