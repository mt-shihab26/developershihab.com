import type { JSXElement } from "solid-js";

import { meta } from "~/lib/meta";

import { ContainerInner, ContainerOuter } from "~/components/ui/container";

const NavLink = (props: { href: string; children: JSXElement }) => {
    return (
        <a href={props.href} class="transition hover:text-teal-500 dark:hover:text-teal-400">
            {props.children}
        </a>
    );
};

const Footer = () => {
    return (
        <footer class="mt-32">
            <ContainerOuter>
                <div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                    <ContainerInner>
                        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                <NavLink href="/about">About</NavLink>
                                <NavLink href="/projects">Projects</NavLink>
                                <NavLink href="/speaking">Speaking</NavLink>
                                <NavLink href="/uses">Uses</NavLink>
                                <NavLink href="/liam">Liam</NavLink>
                            </div>
                            <p class="text-sm text-zinc-600 dark:text-zinc-300">
                                &copy; {new Date().getFullYear()} {meta.copyright}
                            </p>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    );
};

export { Footer };
