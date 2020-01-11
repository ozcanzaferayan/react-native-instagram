import {
  SET_MESSAGES,
  MARK_READ,
  API_START,
  API_END,
} from "actions/types";
import { combineReducers } from 'redux'
import { merge } from 'lodash/object'
function entities(state = { users: {}, repos: {} }, action) {
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
const rootReducer = combineReducers({
  entities,
  // pagination,
  errorMessage,
  // router
})
export default rootReducer

// export default function (state = {}, action) {
//   switch (action.type) {
//     case SET_MESSAGES:
//       return { data: action.payload };
//       case 'INCREMENT':
//         return { data: Number.isInteger(state.data) ? state.data + 1: 0};
//     case MARK_READ:
//       return {
//         data: {
//           ...state.data,
//           messages: state.data.messages.map((message) => {
//             if (message.key === action.payload.id) {
//               return {
//                 ...message,
//                 isRead: !message.isRead
//               }
//             } else return message;
//           })
//         }
//       };

//     case API_START:
//       return {
//         ...state,
//         isLoadingData: true
//       };
//       break;
//     case API_END:
//       return {
//         ...state,
//         isLoadingData: false
//       };
//       break;
//     default:
//       return state;
//   }
// }