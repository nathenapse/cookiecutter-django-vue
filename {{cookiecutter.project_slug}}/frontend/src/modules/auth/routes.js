import Login from "./views/Login";
import Signup from "./views/Signup";
import Forgot from "./views/Forgot";
import Logout from "./views/Logout";
import { NonAuth } from "@/resources/auth";
import { Auth } from "../../resources/auth";

export default [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEntry: NonAuth
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    beforeEntry: NonAuth
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot,
    beforeEntry: NonAuth
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
    beforeEntry: Auth
  }
];
