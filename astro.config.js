// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://developershihab.com",
    prefetch: true,
    integrations: [sitemap()],
    adapter: vercel({ webAnalytics: { enabled: true } }),
    vite: { plugins: [tailwindcss()] }
});
