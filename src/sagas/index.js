import { all } from 'redux-saga/effects';
import watchGetGitUsers from './git/watchGetUsers';
import watchGetGitRepos from './git/watchGetUserRepos';
export default function* rootSaga(){
    yield all([
        watchGetGitUsers(),
        watchGetGitRepos()
    ])
}