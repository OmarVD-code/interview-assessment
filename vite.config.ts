import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";
import path from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), eslint(), checker({ typescript: true, overlay: false })],
    server: {
      host: true,
      port: 8000,
      hmr: {},
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
