type TLink = {
    url: string;
    text?: string;
    srLabel?: string;
};

const Paginator = ({ nextUrl, prevUrl }: { nextUrl?: TLink; prevUrl?: TLink }) => {
    if (!prevUrl && !nextUrl) return null;

    return (
        <nav className="mt-8 flex items-center gap-x-4">
            {prevUrl && (
                <a className="me-auto py-2" href={prevUrl.url}>
                    {prevUrl.srLabel && <span className="sr-only">{prevUrl.srLabel}</span>}
                    {prevUrl.text ? prevUrl.text : "Previous"}
                </a>
            )}
            {nextUrl && (
                <a className="ms-auto py-2" href={nextUrl.url}>
                    {nextUrl.srLabel && <span className="sr-only">{nextUrl.srLabel}</span>}
                    {nextUrl.text ? nextUrl.text : "Next"}
                </a>
            )}
        </nav>
    );
};

export default Paginator;
