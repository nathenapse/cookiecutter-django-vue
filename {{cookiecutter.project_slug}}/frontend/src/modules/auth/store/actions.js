import http from "@/resources/http";

export default {
  login: ({ commit, state }, data) => {
    return new Promise((resolve, reject) => {
      http
        .post(state.url.login, data)
        .then(response => {
          commit("SET_TOKEN", response.data.token);
          commit("SET_USER", response.data.user);
          resolve({ results: response });
        })
        .catch(e => {
          reject(e.response.data);
        });
    });
  },
  logout: ({ commit, state }) => {
    return new Promise((resolve, reject) => {
      http
        .post(state.url.logout_url)
        .then(response => {
          commit("RESET");
          resolve({ results: response });
        })
        .catch(e => {
          reject(e.response.data);
        });
    });
  },
  register: ({ state }, data) => {
    return new Promise((resolve, reject) => {
      http
        .post(state.url.register, data)
        .then(response => {
          resolve({ results: response });
        })
        .catch(e => {
          reject(e.response.data);
        });
    });
  },
  forgot: ({ state }, data) => {
    return new Promise((resolve, reject) => {
      http
        .post(state.url.forgot, data)
        .then(response => {
          resolve({ results: response });
        })
        .catch(e => {
          reject(e.response.data);
        });
    });
  },
  reset: ({ state }, data) => {
    return new Promise((resolve, reject) => {
      http
        .post(state.url.reset, data)
        .then(response => {
          resolve({ results: response });
        })
        .catch(e => {
          reject(e.response.data);
        });
    });
  }
};
