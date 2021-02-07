import HelloWorld from "../components/HelloWorld.vue";
import Login from "../components/Login.vue";
import Join from "../components/Join.vue";
import Main from "../views/Main.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/hello", component: HelloWorld },
  { path: "/join", component: Join },
  { path: "/", component: Main }
];

export default routes;
