import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/movieOnInfoList": {
        target: "https://m.maoyan.com/ajax/movieOnInfoList",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/movieOnInfoList/, ""),
      },

      "/comingList": {
        target: "https://m.maoyan.com/ajax/comingList?ci=10&token=&limit=10",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/comingList/, ""),
      },
      "/movieDetail": {
        // fetch("/movieDetail?movieId=1203734")
        target: "https://m.maoyan.com/ajax/detailmovie",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/detailmovie/, ""),
      },
    },
  },
});
