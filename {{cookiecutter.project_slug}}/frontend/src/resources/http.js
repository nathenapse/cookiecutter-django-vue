import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api/",
  headers: {},
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken"
});

try {
  http.interceptors.request.use(
    config => {
      let data = JSON.parse(localStorage.getItem("gemet-bet"));

      if (data && data.auth.token) {
        config.headers["Authorization"] = `JWT ${data.auth.token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}
// Vue.prototype.$http = http;

export default http;
