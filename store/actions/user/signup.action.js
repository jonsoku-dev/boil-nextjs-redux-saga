import { call, put, takeLatest } from 'redux-saga/effects';
import { signUpAPI } from '../../api/user.api';
import { SIGN_UP_FAIL, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../../type';

export const signUpRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAIL,
      error: err.response.data,
    });
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
