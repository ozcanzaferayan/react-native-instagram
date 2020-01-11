import { put, takeEvery, delay, fork, select, all, take, call } from 'redux-saga/effects'
import { API, FETCH_MESSAGES, SET_MESSAGES, MARK_READ } from "actions/types";
import { getUser } from 'reducers/selectors'
import { api } from 'services'
import * as actions from 'actions'


const { user} = actions

export const fetchUser       = fetchEntity.bind(null, user, api.fetchUser)

// load user unless it is cached
function* loadUser(login, requiredFields) {
  const user = yield select(getUser, login)
  console.log("-----------------", login, user)
  if (!user || requiredFields.some(key => !user.hasOwnProperty(key))) {
    yield call(fetchUser, login)
  }
}

// Fetches data for a User : user data + starred repos
function* watchLoadUserPage() {
  while(true) {
    const {login, requiredFields = []} = yield take('LOAD_USER_PAGE')
    yield fork(loadUser, login, requiredFields)
    // yield fork(loadStarred, login)
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
    fork(watchLoadUserPage),
    // fork(watchLoadRepoPage),
    // fork(watchLoadMoreStarred),
    // fork(watchLoadMoreStargazers)
  ])
}