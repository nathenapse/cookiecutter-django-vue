import Vue from 'vue'
import store from '@/store'
import router from '@/router'

{% if cookiecutter.api == "REST" %}
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
{% elif cookiecutter.api == "GraphQL" %}
import { createProvider } from '@/apollo'
{% endif %}

{% if cookiecutter.analytics == 'Google Analytics' %}import VueAnalytics from 'vue-analytics'{% endif %}
{% if cookiecutter.analytics == 'Yandex Metrika' %}import VueYandexMetrika from 'vue-yandex-metrika'{% endif %}
{% if cookiecutter.use_sentry == 'y' %}import VueRaven from 'vue-raven'{% endif %}

import App from '@/App.vue'
import router from "@/resources/router";
import store from "@/resources/store";
import "@/resources/buefy";
import "@/resources/slider";
import http from "@/resources/http";
import { i18n } from "@/resources/i18n";
import './registerServiceWorker'

Vue.config.productionTip = false

{% if cookiecutter.use_sentry == 'y' %}
// Sentry for logging frontend errors
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueRaven, {dsn: process.env.VUE_APP_SENTRY_PUBLIC_DSN})
}
{% endif %}

{% if cookiecutter.analytics == 'Google Analytics' %}
// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  router
})
{% endif %}

{% if cookiecutter.analytics == 'Yandex Metrika' %}
// more info: https://github.com/vchaptsev/vue-yandex-metrika
Vue.use(VueYandexMetrika, {
  id: process.env.VUE_APP_YANDEX_METRIKA,
  env: process.env.NODE_ENV,
  router
})
{% endif %}

new Vue({
  router,
  store,
  i18n,
  {% if cookiecutter.api == "GraphQL" %}provide: createProvider().provide(),{% endif %}
  render: h => h(App),
  created() {
    var vm = this;
    http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (
          err.response.status === 401 &&
          err.config &&
          !err.config.__isRetryRequest
        ) {
          // if you ever get an unauthorized, logout the user
          vm.$store.dispatch("LOGOUT");
          vm.$router.push({ name: "login" });
        } else {
          throw err;
        }
      });
    });
  }
}).$mount('#app')
