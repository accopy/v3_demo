import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import router from "./router";
import pinia from "./stores/index.js";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(Antd);

app.mount("#app");
