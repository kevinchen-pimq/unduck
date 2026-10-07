import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // GitHub Pages serves the project under /<repo>/, set via BASE_PATH in CI
  base: process.env.BASE_PATH ?? "/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
});
