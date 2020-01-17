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

export const MARK_READ = 'MARK_READ'
export const LOAD_MESSAGES = 'LOAD_MESSAGES'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const messages = {
  request: login => action(MESSAGES[REQUEST], {login, isLoading: true}),
  success: (login, response) => action(MESSAGES[SUCCESS], {login, response}),
  failure: (login, error) => {
    return action(MESSAGES[FAILURE], {login, error});
  }
}

export const loadMessages = (binId, requiredFields = []) => action(LOAD_MESSAGES, {binId, requiredFields})
export const updateRouterState = state => action(MARK_READ, {state})