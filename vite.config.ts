import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "maskable_icon.svg",
        "/images/bg-desktop-dark.jpg",
        "/images/bg-desktop-light.jpg",
        "/images/bg-mobile-dark.jpg",
        "/images/bg-mobile-light.jpg",
        "/images/icon-check.svg",
        "/images/icon-cross.svg",
      ],
      manifest: {
        name: "TODO LIST",
        short_name: "TODO",
        description:
          "Frontend Mentors installable Multi-theme Todo List application",
        theme_color: "#161722",
        background_color: "#161722",
        start_url: "/",
        icons: [
          {
            src: "maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
