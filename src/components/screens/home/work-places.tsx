import { work_places } from "~/config/work_places";
import { cn } from "~/lib/utils";

import { BriefcaseIcon } from "~/components/icons/briefcase-icon";
import { DownloadIcon } from "~/components/icons/download-icon";

const WorkPlaces = () => {
    return (
        <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon class="h-6 w-6 flex-none" />
                <span class="ml-3">Work</span>
            </h2>
            <ol class="mt-6 space-y-4">
                {work_places.map((role) => (
                    <li class="flex gap-4">
                        <div
                            class={cn(
                                "relative mt-1 flex h-10 w-10 flex-none items-center justify-center ",
                                "rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border ",
                                "dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                            )}
                        >
                            <img src={role.logo.src} alt="" class="h-7 w-7" />
                        </div>
                        <dl class="flex flex-auto flex-wrap gap-x-2">
                            <dt class="sr-only">Company</dt>
                            <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt class="sr-only">Role</dt>
                            <dd class="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
                            <dt class="sr-only">Date</dt>
                            <dd
                                class="ml-auto text-xs text-zinc-500 dark:text-zinc-500"
                                aria-label={`${role.start} until ${role.end}`}
                            >
                                <time dateTime={role.start}>{role.start}</time>{" "}
                                <span aria-hidden="true">—</span>{" "}
                                <time dateTime={role.end}>{role.end}</time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <button
                class={cn(
                    "inline-flex items-center gap-2  group justify-center rounded-md py-2 px-3 text-sm",
                    "outline-offset-2 transition active:transition-none font-medium mt-6 w-full",
                    "bg-zinc-50 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60",
                    "dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                    "dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                )}
            >
                Download CV
                <DownloadIcon
                    class={cn(
                        "h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50",
                        "dark:group-active:stroke-zinc-50"
                    )}
                />
            </button>
        </div>
    );
};

export { WorkPlaces };
