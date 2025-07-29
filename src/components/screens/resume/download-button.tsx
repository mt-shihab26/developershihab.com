import { DownloadIcon } from "~/components/icons/download-icon";

export const DownloadButton = () => {
    return (
        <a
            href="/shihab-mahamud-resume.pdf"
            download={true}
            className="flex h-10 cursor-pointer items-center justify-center rounded-md border border-zinc-700/50 bg-white px-3 text-black shadow-xs transition"
        >
            <DownloadIcon className="mr-1 h-5 w-5 stroke-black transition" />
            Download
        </a>
    );
};
