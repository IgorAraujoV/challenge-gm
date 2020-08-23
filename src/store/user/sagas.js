import { call, put, all } from 'redux-saga/effects';

import axios from 'axios';
import { addUserSuccess, addUserError } from './actions';

async function getCoordinates(location) {
  console.log('Enter getCoordinates');
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const response = await axios.get(url);

  if (response.status >= 400) return null;

  console.log('Out getCoordinates');
  return response.data.results[0].geometry.location;
}

async function getStarredRepositories(username) {
  console.log('Enter getRepos');
  const response = await axios.get(
    `https://api.github.com/users/${username}/starred`
  );
  console.log('Out getRepos');
  return response.data;
}

export function* addUserRequest(action) {
  try {
    console.log('Enter addUserRequest');
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload.username}`
    );
    const [coordinates, starredRepos] = yield all([
      getCoordinates(response.data.location),
      getStarredRepositories(action.payload.username),
    ]);

    const user = {
      id: response.data.id,
      login: response.data.login,
      name: response.data.name,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
      url: response.data.html_url,
      location: response.data.location,
      coordinates,
      starredRepos,
    };

    console.log('Out addUserRequest');
    yield put(addUserSuccess(user));
  } catch (error) {
    console.log('addUserRequestError');
    yield put(addUserError(action.payload.username));
  }
}
