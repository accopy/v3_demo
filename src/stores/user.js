import { defineStore } from "pinia";

export const userInfo = defineStore("user", {
  // 其他配置...
  state: () => ({
    name: "9999",
  }),
  //类似state的计算属性
  getters: {},
  actions: {},
});

export default userInfo;
