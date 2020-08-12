import { all, fork } from 'redux-saga/effects';
import { watchSignUp } from '../actions/user/signup.action';

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
  ]);
}
