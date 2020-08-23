const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,

  users: [
    {
      avatar: 'https://avatars3.githubusercontent.com/u/45022624?v=4',
      bio: 'Developer React JS | React Native | Node JS',
      coordinates: {
        lat: -3.7327144,
        lng: -38.5269981,
      },
      id: 45022624,
      location: 'Fortaleza - CE',
      login: 'IgorAraujoV',
      name: 'Igor Araujo',
      url: 'https://github.com/IgorAraujoV',
    },
  ],
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
