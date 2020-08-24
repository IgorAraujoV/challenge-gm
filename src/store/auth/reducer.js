const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: false, success: false };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        user: action.payload.user,
      };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: true, success: false };
    case 'ADD_STARRED_REPO':
      return {
        ...state,
        user: {
          ...state.user,
          starredRepos: [...state.user.starredRepos, action.payload.repository],
        },
      };
    case 'REMOVE_STARRED_REPO':
      return {
        ...state,
        user: {
          ...state.user,
          starredRepos: state.user.starredRepos.filter(
            repo => repo.id !== action.payload.repositoryId
          ),
        },
      };
    case 'LOGOUT':
      return { ...state, success: false, user: null };
    default:
      return state;
  }
}
