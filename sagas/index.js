import { put, takeEvery, delay, fork, select, all, take, call } from 'redux-saga/effects'
import { API, FETCH_MESSAGES, SET_MESSAGES, MARK_READ } from "actions/types";
import { getMessages } from 'reducers/selectors'
import { api } from 'services'
import * as actions from 'actions'


const { user } = actions

export const fetchMessages = fetchEntity.bind(null, user, api.fetchMessages)

// load user unless it is cached
function* loadMessages(binId, requiredFields) {
  const user = yield select(getMessages, binId)
  if (!user || requiredFields.some(key => !user.hasOwnProperty(key))) {
    yield call(fetchMessages, binId)
  }
}

// Fetches data for a User : user data + starred repos
function* watchLoadMessages() {
  while(true) {
    const {binId, requiredFields = []} = yield take('LOAD_MESSAGES')
    yield fork(loadMessages, binId, requiredFields)
  }
}

/***************************** Subroutines ************************************/

// resuable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn
function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id)
  if(response)
    yield put( entity.success(id, response) )
  else
    yield put( entity.failure(id, error) )
}

export default function* rootSaga() {
  yield all([
    // fork(watchNavigate),
    fork(watchLoadMessages),
    // fork(watchLoadRepoPage),
    // fork(watchLoadMoreStarred),
    // fork(watchLoadMoreStargazers)
  ])
}