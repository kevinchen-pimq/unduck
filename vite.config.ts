import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // GitHub Pages serves the project under /<repo>/, set via BASE_PATH in CI
  base: process.env.BASE_PATH ?? "/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["search.svg", "clipboard.svg", "clipboard-check.svg"],
      manifest: {
        name: "Unduck",
        short_name: "Unduck",
        description: "A better default search engine (with bangs!)",
        theme_color: "#000000",
        background_color: "#000000",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "search.svg", sizes: "any", type: "image/svg+xml" },
        ],
      },
      workbox: {
        // The full bang list is ~2 MB; make sure it is precached too
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    }),
  ],
});
