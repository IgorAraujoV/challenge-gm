import { all, takeLatest } from 'redux-saga/effects';

import { addUserRequest } from './user/saga';
import { loginRequest } from './auth/saga';

export default function* rootSaga() {
  return yield all([
    takeLatest('ADD_USER_REQUEST', addUserRequest),
    takeLatest('LOGIN_REQUEST', loginRequest),
  ]);
}
