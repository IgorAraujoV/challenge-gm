import { call, put, all } from 'redux-saga/effects';

import axios from 'axios';
import { loginSuccess, loginError } from './actions';

async function getCoordinates(location) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const response = await axios.get(url);

  if (response.status >= 400) return null;

  return response.data.results[0].geometry.location;
}

async function getStarredRepositories(username) {
  const response = await axios.get(
    `https://api.github.com/users/${username}/starred`
  );

  const repositories = response.data.map(repo => ({
    name: repo.name,
    id: repo.id,
    owner: {
      login: repo.owner.login,
      name: repo.owner.name,
      avatar: repo.owner.avatar_url,
      id: repo.owner.id,
    },
  }));

  return repositories;
}

export function* loginRequest(action) {
  try {
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

    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginError());
  }
}
