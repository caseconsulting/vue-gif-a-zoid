import Vue from "vue";
import Vuesax from "vuesax";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(Router);
import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
