import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import UserProfile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/Icons",
    name: "Icons",
    component: Icons
  },
  {
    path: "/UserProfile",
    name: "UserProfile",
    component: UserProfile
  },
  {
    path: "/Tables",
    name: "Tables",
    component: Tables
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
