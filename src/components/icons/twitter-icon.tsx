import type { TIcon } from "~/types/utils";

const XIcon: TIcon = (props) => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M18.54 3H21L14.9 10.4L22 21H15.88L11.3 14.84L6.16 21H3L9.56 13.12L2.5 3H8.76L12.92 8.64L18.54 3ZM17.46 19H18.9L7.64 5H6.1L17.46 19Z" />
        </svg>
    );
};

export { XIcon as TwitterIcon };
