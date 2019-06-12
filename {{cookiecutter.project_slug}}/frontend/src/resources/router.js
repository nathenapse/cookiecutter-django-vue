import Vue from "vue";
import Router from "vue-router";
import { routes as modules } from "../modules";

Vue.use(Router);

const baseRoutes = [{ path: "*", redirect: "/" }];
const routes = baseRoutes.concat(modules);

const router = new Router({
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-exact-active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
