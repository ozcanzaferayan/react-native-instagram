import { schema, normalize } from 'normalizr'
import 'isomorphic-fetch'
import {responseMessageSchema, responseStorySchema} from 'schemas'


const API_ROOT = 'https://api.myjson.com/'

function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return Object.assign({}, normalize(json, schema));
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    );
}

// api services
//export const fetchUser = login => callApi(`users/${login}`, messageSchema)
export const fetchMessages = binId => callApi(`bins/${binId}`, responseMessageSchema)
export const fetchStories = binId => callApi(`bins/${binId}`, responseStorySchema)
