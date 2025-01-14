import DownloadIcon from "@/components/icons/DownloadIcon";

const DownloadResume = () => {
    return (
        <div className="inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md">
            <DownloadIcon className="h-4 w-4" />
            <span className="font-medium">Download Resume</span>
        </div>
    );
};

export default DownloadResume;
