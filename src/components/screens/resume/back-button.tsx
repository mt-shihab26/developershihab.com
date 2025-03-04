import { ArrowLeftIcon } from "~/components/icons/arrow-left-icon";

export const BackButton = () => {
    return (
        <div>
            <button
                type="button"
                aria-label="Go back to articles"
                className="group cursor-pointer flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 transition border border-zinc-700/50 bg-zinc-800 ring-0 ring-white/10 hover:border-zinc-700 hover:ring-white/20"
                onClick={() => history.back()}
            >
                <ArrowLeftIcon className="h-4 w-4 transition stroke-zinc-200 group-hover:stroke-zinc-300" />
            </button>
        </div>
    );
};
