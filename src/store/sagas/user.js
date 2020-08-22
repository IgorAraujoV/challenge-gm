import { call, put } from 'redux-saga/effects';

import { addUserSuccess, addUserError } from '../actions/user';
import axios from 'axios';

export function* addUserRequest(action) {
  try {
    const response = yield call(axios.get, `https://api.github.com/users/${action.payload.username}`);
    console.log('saga user')
    yield put(addUserSuccess(response.data));
  } catch (error) {
    console.log('saga user error')
    yield put(addUserError(action.payload.username));
  }
}