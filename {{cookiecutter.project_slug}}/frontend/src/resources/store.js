import Vue from "vue";
import Vuex from "vuex";
import modules from "../modules/stores";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "",
    snackbar: {
      status: "success",
      message: "",
      value: false
    }
  },
  getters: {
    lang: state => state.lang,
    snackbar: state => state.snackbar
  },
  mutations: {
    SET_LANG: (state, lang) => {
      state.lang = lang;
    },
    SET_SNACKBAR: (state, payload) => {
      state.snackbar.status = payload.status;
      state.snackbar.message = payload.message;
      state.snackbar.value = payload.value;
    }
  },
  actions: {
    LOGOUT({ commit }) {
      // Add the actions which needs to be removed here
      commit("auth/RESET");
      commit("home/RESET_BET");
      commit("home/RESET_JACKPOT_BET");
      commit("wallet/RESET_WALLET");
    },
    setLang: ({ commit }, options) => {
      options.vm.$i18n.locale = options.lang;
      commit("SET_LANG", options.lang);
    }
  },

  modules,

  plugins: [
    createPersistedState({
      key: "gemet-bet"
    })
  ]
});
