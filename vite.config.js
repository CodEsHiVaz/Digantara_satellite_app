import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.API_url": JSON.stringify(env.API_url),
    },
    plugins: [vue()],
  };
});
