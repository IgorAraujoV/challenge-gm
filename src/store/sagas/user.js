import { call, put } from 'redux-saga/effects';

import axios from 'axios';
import { addUserSuccess, addUserError } from '../actions/user';

async function getCoordinates(location) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const response = await axios.get(url);

  if (response.status >= 400) return null;

  return response.data.results[0].geometry.location;
}

export function* addUserRequest(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload.username}`
    );
    const coordinates = yield getCoordinates(response.data.location);

    const user = {
      id: response.data.id,
      login: response.data.login,
      name: response.data.name,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
      url: response.data.html_url,
      location: response.data.location,
      coordinates,
    };

    console.log('saga user');
    console.log(user);
    yield put(addUserSuccess(user));
  } catch (error) {
    console.log('saga user error');
    yield put(addUserError(action.payload.username));
  }
}
