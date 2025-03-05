import { ArrowLeftIcon } from "~/components/icons/arrow-left-icon";

export const BackButton = () => {
    return (
        <div>
            <button
                type="button"
                aria-label="Go back to articles"
                className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full shadow-xs transition border border-zinc-700/50 bg-white text-black "
                onClick={() => history.back()}
            >
                <ArrowLeftIcon className="h-4 w-4 transition stroke-black" />
            </button>
        </div>
    );
};
