import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    user: {},
    token: null,
    loggedIn: false,
    url: {
      login: "/api_auth/login/",
      register: "/api_auth/registration/",
      forgot: "/api_auth/password/reset/",
      reset: "/api_auth/password/reset/confirm/",
      logout_url: "/api_auth/logout/",
    }
  },
  getters,
  actions,
  mutations
};
