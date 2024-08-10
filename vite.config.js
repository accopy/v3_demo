import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite"; //按需自动加载API插件
import VueSetupExtend from "vite-plugin-vue-setup-extend"; //setup语法糖扩展

import Pages from "vite-plugin-pages"; //自动生成路由
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core", "pinia"],
      imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      dts: "types/auto-imports.d.ts", // 使用typescript，需要指定生成对应的d.ts文件或者设置为true,生成默认导入d.ts文件
      dirs: ["src/stores", "src/composables", "src/hooks"],
    }),
    VueSetupExtend(),
    Pages({
      dirs: "src/views", // 需要生成路由的文件目录
      exclude: ["**/components/*.vue"], // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
