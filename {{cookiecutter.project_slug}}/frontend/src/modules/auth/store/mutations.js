export default {
  SET_DATA: (state, data) => {
    state.user = data.data.results;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
    state.loggedIn = true;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
  RESET: state => {
    state.token = null;
    state.user = null;
    state.loggedIn = false;
  }
};
