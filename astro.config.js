// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://developershihab.com",
    prefetch: true,
    integrations: [solid(), sitemap()],
    adapter: vercel({ webAnalytics: { enabled: true } }),
    vite: { plugins: [tailwindcss()] }
});
