const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,

  users: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER_REQUEST':
      console.log('request');
      return { ...state, loading: true, error: false, success: false };
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        users: [...state.users, action.payload.user],
      };
    case 'ADD_USER_ERROR':
      return { ...state, loading: false, error: true, success: false };
    default:
      return state;
  }
}
