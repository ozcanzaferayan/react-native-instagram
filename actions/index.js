import { API, FETCH_MESSAGES, SET_MESSAGES, MARK_READ } from "actions/types";

export function fetchMessages(){
  return apiAction({
    url: "https://api.myjson.com/bins/1herpk",
    onSuccess: setMessages,
    onFailure: (message) => console.log(message),
    label: FETCH_MESSAGES
  });
}

function setMessages(data) {
  return {
    type: SET_MESSAGES,
    payload: data
  };
}

 export function markRead(data) {
  return {
    type: MARK_READ,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}