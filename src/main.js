import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import NavBar from "./components/NavBar.vue";

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount("#app");
