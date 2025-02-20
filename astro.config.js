// @ts-check
import { defineConfig } from "astro/config";

import solid from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    integrations: [solid()],
    adapter: vercel({ webAnalytics: { enabled: true } }),
    vite: { plugins: [tailwindcss()] },
});
