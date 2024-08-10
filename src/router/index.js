import { createRouter, createWebHistory } from "vue-router";
import autoRoutes from "~pages"; //引入自动配置的路由
let currentPath = autoRoutes[0].path; //获取最后一个路由地址

//自己写的路由
const myRouter = [
  {
    path: "/",
    redirect: currentPath, //重定向到最后一个路由地址
  },
];

//合成
let routes_z = [...autoRoutes, ...myRouter];

const router = createRouter({
  history: createWebHistory(),
  routes: autoRoutes, //选择哪个路由 myRouter/autoRoutes/routes_z
});

export default router;
