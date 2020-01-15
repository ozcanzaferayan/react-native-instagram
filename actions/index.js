import { API, FETCH_MESSAGES, SET_MESSAGES, MARK_READ } from "actions/types";

export function fetchMessages(){
  return apiAction({
    url: "https://api.myjson.com/bins/1herpk",
    onSuccess: setMessages,
    onFailure: (message) => console.log(message),
    label: FETCH_MESSAGES
  });
}

export function increment(){
  return {
    type: 'INCREMENT',
    payload: data
  };
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


const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

function action(type, payload = {}) {
  console.log("55555555", type, payload)
  return {type, ...payload}
}

export const USER = createRequestTypes('USER')

export const user = {
  request: login => action(USER[REQUEST], {login, isLoading: true}),
  success: (login, response) => action(USER[SUCCESS], {login, response}),
  failure: (login, error) => {
    console.log("FAILUREEEEEEE", login, error)
    return action(USER[FAILURE], {login, error});
  }
    ,
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

export const loadMessages = (binId, requiredFields = []) => action('LOAD_MESSAGES', {binId, requiredFields})