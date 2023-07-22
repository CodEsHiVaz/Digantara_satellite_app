import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      API_url: "https://smoggy-sweater-deer.cyclic.app/satellites",
    },
  },
  plugins: [vue()],
});
