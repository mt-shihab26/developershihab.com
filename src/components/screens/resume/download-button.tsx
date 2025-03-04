import { DownloadIcon } from "~/components/icons/download-icon";

export const DownloadButton = () => {
    return (
        <a
            href="/shihab-mahamud-resume.pdf"
            download={true}
            className="group cursor-pointer flex h-10 text-zinc-200 px-3 rounded-md group-hover:text-zinc-300 items-center justify-center shadow-md shadow-zinc-800/5 transition border border-zinc-700/50 bg-zinc-800 ring-0 ring-white/10 hover:border-zinc-700 hover:ring-white/20"
        >
            <DownloadIcon className="h-5 w-5 mr-1 transition stroke-zinc-200 group-hover:stroke-zinc-300" />
            Download Resume
        </a>
    );
};
