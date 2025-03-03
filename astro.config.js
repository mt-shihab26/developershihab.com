// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://developershihab.com",
    prefetch: true,
    integrations: [sitemap(), react()],
    adapter: vercel({ webAnalytics: { enabled: true } }),
    vite: { plugins: [tailwindcss()] }
});
