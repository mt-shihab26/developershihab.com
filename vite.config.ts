import { defineConfig } from "vite-plus";

export default defineConfig({
    lint: {
        plugins: [
            "oxc",
            "typescript",
            "unicorn", //
        ],
        categories: {
            correctness: "error",
        },
        env: {
            builtin: true,
            browser: true,
            node: true,
        },
        rules: {
            "no-console": "error",
        },
        overrides: [
            {
                files: ["src/lib/resume.ts"],
                rules: { "no-console": "off" },
            },
        ],
        ignorePatterns: [
            "dist/**",
            ".astro",
            "public/pagefind/**", //
        ],
        options: {
            typeAware: false,
            typeCheck: false,
        },
    },
    fmt: {
        arrowParens: "avoid",
        semi: true,
        tabWidth: 4,
        printWidth: 120,
        singleQuote: false,
        jsxSingleQuote: false,
        trailingComma: "es5",
        bracketSpacing: true,
        endOfLine: "lf",
        sortPackageJson: false,
        astro: {},
        sortImports: {
            partitionByNewline: true,
            newlinesBetween: false,
        },
        sortTailwindcss: {
            stylesheet: "./src/styles/global.css",
        },
        overrides: [
            {
                files: ["*.svg"],
                options: {
                    htmlWhitespaceSensitivity: "ignore",
                },
            },
            {
                files: ["*.md"],
                options: {
                    proseWrap: "preserve",
                },
            },
        ],
        associations: [
            {
                files: ["*.astro"],
                language: "astro",
            },
            {
                files: ["*.svg"],
                language: "html",
            },
        ],
        ignorePatterns: [
            ".astro",
            ".claude",
            ".wrangler",
            "dist",
            "node_modules",
            "bun.lock", //
        ],
    },
});
