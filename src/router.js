import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Todos from "./views/Todos.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },

    {
      path: "/todos",
      component:Todos,
    },
  ],
});
