import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  css: {
    devSourcemap: true,
  },
});
