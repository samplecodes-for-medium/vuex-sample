import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/Home-page";
import AboutPage from "./components/About-page";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/about",
      component: AboutPage
    }
  ]
});
