import { createRouter, createWebHashHistory } from "vue-router";
import PageMain from "./components/PageMain.vue";
import PageArchive from "./components/PageArchive.vue";
import PageTrash from "./components/PageTrash.vue";

export default createRouter({
    history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: PageMain,
    },
    {
        path: "/trash",
        component: PageTrash,
      },    {
        path: "/archive",
        component: PageArchive,
      },
  ],
});
