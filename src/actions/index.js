const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const MESSAGES = createRequestTypes('MESSAGES')
export const STORIES = createRequestTypes('STORIES')

export const MARK_READ = 'MARK_READ'
export const LOAD_MESSAGES = 'LOAD_MESSAGES'
export const LOAD_STORIES = 'LOAD_STORIES'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const messages = {
  request: binId => action(MESSAGES[REQUEST], {binId, isLoading: true}),
  success: (binId, response) => action(MESSAGES[SUCCESS], {binId, response}),
  failure: (binId, error) => {
    return action(MESSAGES[FAILURE], {binId, error});
  }
}
export const stories = {
  request: binId => action(STORIES[REQUEST], {binId, isLoading: true}),
  success: (binId, response) => action(STORIES[SUCCESS], {binId, response}),
  failure: (binId, error) => {
    return action(STORIES[FAILURE], {binId, error});
  }
}

export const loadMessages = (binId, requiredFields = []) => action(LOAD_MESSAGES, {binId, requiredFields})
export const loadStories = (binId, requiredFields = []) => action(LOAD_STORIES, {binId, requiredFields})
export const updateRouterState = state => action(MARK_READ, {state})