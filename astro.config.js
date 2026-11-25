import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://developershihab.com",
    output: "static",
    // Astro 7 defaults to "jsx", which strips whitespace between inline elements and text
    compressHTML: true,
    integrations: [react(), mdx(), sitemap()],
    vite: { plugins: [tailwindcss()] },
});
