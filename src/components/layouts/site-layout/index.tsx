import type { JSXElement } from "solid-js";

import { Footer } from "./footer";
import { Header } from "./header";

const SiteLayout = (props: { children: JSXElement }) => {
    return (
        <>
            <div class="fixed inset-0 flex justify-center sm:px-8">
                <div class="flex w-full max-w-7xl lg:px-8">
                    <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                </div>
            </div>
            <div class="relative">
                <Header />
                <main>{props.children}</main>
                <Footer />
            </div>
        </>
    );
};

export { SiteLayout };
