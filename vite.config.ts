import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ["lottie-player"].includes(tag),
      },
    },
  })],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
