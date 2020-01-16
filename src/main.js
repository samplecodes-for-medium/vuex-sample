import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import routes from "./routes";

Vue.config.productionTip = false;

var vm = new Vue({
  store,
  router: routes,
  render: h => h(App)
}).$mount("#app");

window.vm = vm;
