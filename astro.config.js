// @ts-check
import { defineConfig } from "astro/config";

import solid from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    integrations: [solid()],
    adapter: vercel({ webAnalytics: { enabled: true } }),
});
