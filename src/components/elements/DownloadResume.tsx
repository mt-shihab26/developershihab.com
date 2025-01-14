import { useState } from "react";

import DownloadIcon from "@/components/icons/DownloadIcon";

const resumeFileName = "shihab-mahamud-resume.pdf";

const DownloadResume = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);

            const response = await fetch(`/${resumeFileName}`);
            if (!response.ok) {
                throw new Error("Failed to download resume");
            }

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = resumeFileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading resume:", error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md ${isDownloading ? "cursor-not-allowed opacity-50" : "hover:opacity-90"} `}
        >
            <DownloadIcon className={`h-4 w-4 ${isDownloading ? "animate-bounce" : ""}`} />
            <span className="font-medium">
                {isDownloading ? "Downloading..." : "Download Resume"}
            </span>
        </button>
    );
};

export default DownloadResume;
