import { takeLatest, call, put } from 'redux-saga/effects';
import { API } from '../../utils/constants';

// function that makes the api request and returns a Promise for response
const fetchGitUsers = async (q) => {
  const resp = await fetch(`${API}/search/users?q=${q}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await resp.json();
  return json;
};

// worker saga: makes the api call when watcher saga sees the action
function* getGitUsers(action) {
  let results;
  try {
    const response = yield call(fetchGitUsers, action.payload);
    console.log(response);
    if (response && response.items) {
      results = {
        gitUsers: response.items,
        message: 'Users Fetched Sucessfully',
      };
     
      // dispatch a success action to the store with the results
      yield put({ type: 'REQUEST_GIT_USERS_SUCCESS', results });
    } else {
      results = {
        gitUsers: null,
        message: 'Failed. Some Error!',
      };
     
      yield put({ type: 'REQUEST_GIT_USERS_FAILED', results });
    }
  } catch (error) {
    results = {
      gitUsers: null,
      message: error.message,
    };
    yield put({ type: 'REQUEST_GIT_USERS_FAILED', results });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watchGetGitUsers() {
  yield takeLatest('REQUEST_GIT_USERS', getGitUsers);
}
