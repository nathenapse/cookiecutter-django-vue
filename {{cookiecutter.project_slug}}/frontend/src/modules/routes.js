import { routes as auth } from "./auth";
import { routes as home } from "./home";
// import { routes as dashboard } from "./dashboard";

export default [...auth, ...home]; // add the modules route here  ...home, ...dashboard
