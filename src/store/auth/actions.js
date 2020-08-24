export function loginRequest(username) {
  return {
    type: 'LOGIN_REQUEST',
    payload: {
      username,
    },
  };
}

export function loginSuccess(user) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      user,
    },
  };
}

export function loginError() {
  return {
    type: 'LOGIN_ERROR',
  };
}

export function addStarredRepository(repository) {
  return {
    type: 'ADD_STARRED_REPO',
    payload: {
      repository,
    },
  };
}

export function removeStarredRepository(repositoryId) {
  return {
    type: 'REMOVE_STARRED_REPO',
    payload: {
      repositoryId,
    },
  };
}

export function logout() {
  return { type: 'LOGOUT' };
}
