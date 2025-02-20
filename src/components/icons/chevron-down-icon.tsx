import type { TIcon } from "~/types/utils";

const ChevronDownIcon: TIcon = (props) => {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
            <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export { ChevronDownIcon };
