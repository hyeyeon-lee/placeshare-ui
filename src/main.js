import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import "./assets/css/layout.css"; // layout.css

Vue.use(VueRouter);

Vue.config.productionTip = false;

import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import Join from "./components/Join.vue";
import Main from "./views/Main.vue";
import "./quasar";

const routes = [
  { path: "/", component: Login },
  { path: "/hello", component: HelloWorld },
  { path: "/join", component: Join },
  { path: "/main", component: Main }
];

const router = new VueRouter({
  routes
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
