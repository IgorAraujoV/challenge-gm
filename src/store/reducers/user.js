const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
  users: [
    // {
    //   id: 16665625,
    //   login: "naeliofreires",
    //   node_id: "MDQ6VXNlcjE2NjY1NjI1",
    //   avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
    //   gravatar_id: "",
    //   url: "https://api.github.com/users/naeliofreires",
    //   html_url: "https://github.com/naeliofreires",
    //   followers_url: "https://api.github.com/users/naeliofreires/followers",
    //   following_url: "https://api.github.com/users/naeliofreires/following{/other_user}",
    //   gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
    //   starred_url: "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
    //   subscriptions_url: "https://api.github.com/users/naeliofreires/subscriptions",
    //   organizations_url: "https://api.github.com/users/naeliofreires/orgs",
    //   repos_url: "https://api.github.com/users/naeliofreires/repos",
    //   events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
    //   received_events_url: "https://api.github.com/users/naeliofreires/received_events",
    //   type: "User",
    //   site_admin: false,
    //   name: "Naélio Freires",
    //   company: "@Esportudo",
    //   blog: "https://www.linkedin.com/in/naeliofreires/",
    //   location: "Fortaleza - CE",
    //   email: null,
    //   hireable: null,
    //   bio: "Desenvolvedor Desktop | Mobile | Web. Sempre em busca de novos conhecimentos, experiências e tecnologias.\r\n "
    // }
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
