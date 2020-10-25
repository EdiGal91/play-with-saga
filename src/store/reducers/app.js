import { SHOW_ALERT } from "../types"

const initialState = {
  alertText: '',
  alertType: ''
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_ALERT: {
      const {text: alertText, type: alertType} = action.payload
      return { ...state, alertText, alertType }
    }
    default: return state
  }
}