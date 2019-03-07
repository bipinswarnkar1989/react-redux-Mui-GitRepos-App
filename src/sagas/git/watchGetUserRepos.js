import { takeLatest, call, put } from 'redux-saga/effects';
import { API } from '../../utils/constants';

// function that makes the api request and returns a Promise for response
const fetchGitUserRepos = async (user) => {
  const resp = await fetch(`${API}/users/${user}/repos`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await resp.json();
  return json;
};

// worker saga: makes the api call when watcher saga sees the action
function* getGitRepos(action) {
  let results;
  try {
    const response = yield call(fetchGitUserRepos, action.payload);
    console.log(response);
    if (response) {
      results = {
        gitRepos: response,
        message: 'Repos Fetched Sucessfully',
      };
     
      // dispatch a success action to the store with the results
      yield put({ type: 'REQUEST_GIT_REPOS_SUCCESS', results });
    } else {
      results = {
        gitRepos: null,
        message: 'Failed. Some Error!',
      };
     
      yield put({ type: 'REQUEST_GIT_REPOS_FAILED', results });
    }
  } catch (error) {
    results = {
      gitRepos: null,
      message: error.message,
    };
    yield put({ type: 'REQUEST_GIT_REPOS_FAILED', results });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watchGetGitRepos() {
  yield takeLatest('REQUEST_GIT_REPOS', getGitRepos);
}
