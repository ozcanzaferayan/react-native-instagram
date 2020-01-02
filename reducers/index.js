import {
  SET_ARTICLE_DETAILS,
  SET_MESSAGES,
  API_START,
  API_END,
  FETCH_ARTICLE_DETAILS
} from "actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_ARTICLE_DETAILS:
      return { data: action.payload };
    case SET_MESSAGES:
      return { data: action.payload };
    case API_START:
      return {
        ...state,
        isLoadingData: true
      };
      break;
    case API_END:
      return {
        ...state,
        isLoadingData: false
      };
      break;
    default:
      return state;
  }
}