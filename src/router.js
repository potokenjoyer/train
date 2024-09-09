import { createRouter, createWebHashHistory } from "vue-router";
import PageMain from "./components/PageMain.vue";
import PageArchive from "./components/PageArchive.vue";
import PageTrash from "./components/PageTrash.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: 'Main',
      component: PageMain,
    },
    {
      path: "/trash",
      name: 'Trash',
      component: PageTrash,
    },
    {
      path: "/archive",
      name: 'Archive',
      component: PageArchive,
    },
  ],
});
