export const R = ({ label, href }: { label: string; href: string }) => {
    return (
        <a href={href} target="_blank" className="inline-flex items-center underline underline-offset-2">
            {label}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
            </svg>
        </a>
    );
};
