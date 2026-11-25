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
            // The resume script is a CLI that reports progress on the console
            { files: ["src/lib/resume.ts"], rules: { "no-console": "off" } },
        ],
        ignorePatterns: ["dist/**", ".astro", "public/pagefind/**"],
        // Off because Vite+ can't read the .astro content mappers in tsconfig.json;
        // `tsc --runExternalCode` in the lint script does the type check instead
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
        sortImports: { partitionByNewline: true, newlinesBetween: false },
        sortTailwindcss: {
            stylesheet: "./src/styles/global.css",
        },
        astro: {},
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
        ignorePatterns: [".astro", ".claude", ".wrangler", "dist", "node_modules", "bun.lock"],
    },
});
