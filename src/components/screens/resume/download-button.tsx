import { DownloadIcon } from "~/components/icons/download-icon";

export const DownloadButton = () => {
    return (
        <a
            href="/shihab-mahamud-resume.pdf"
            download={true}
            className="cursor-pointer flex h-10 text-black px-3 rounded-md items-center justify-center shadow-xs transition border border-zinc-700/50 bg-white"
        >
            <DownloadIcon className="h-5 w-5 mr-1 transition stroke-black" />
            Download
        </a>
    );
};
