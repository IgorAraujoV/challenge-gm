export function addUserSuccess(user) {
  return {
    type: "ADD_USER_SUCCESS",
    payload: {
      user
    }
  }
}

export function addUserRequest(username) {
  return {
    type: "ADD_USER_REQUEST",
    payload: {
      username
    }
  }
}

export function addUserError(username) {
  return {
    type: "ADD_USER_ERROR",
    payload: {
      username
    }
  }
}