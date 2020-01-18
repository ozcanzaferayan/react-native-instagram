import { combineReducers } from 'redux'
import { merge } from 'lodash/object'
function entities(state = { stories: {}, messages: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action
  if (type === 'RESET_ERROR_MESSAGE') {
    return null
  } else if (error) {
    return action.error
  }

  return state
}
function isLoading(state = null, action) {

  if (action.type.endsWith("REQUEST")) {
    return true;
  }
  else if (action.type.endsWith("SUCCESS") || action.type.endsWith("ERROR")) {
    return false;
  }

  return false;
}
const rootReducer = combineReducers({
  entities,
  errorMessage,
  isLoading,
})
export default rootReducer