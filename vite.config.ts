import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "websitename",
        short_name: "websitename",
        description:
          "Frontend Mentors installable Multi-theme Todo List application",
        theme_color: "#161722",
        start_url: "/",
        icons: [
          {
            src: "maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "maskable_icon(2).png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable_icon(2).png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
