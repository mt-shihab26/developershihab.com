import { cn } from "@/lib/utils";

import { avatar } from "@/lib/files";
import { bio, email, github, linkedin, location, name, phone, website } from "@/lib/information";

import { GitHubDark, GitHubLight, LinkedIn } from "developer-icons";
import { Globe } from "lucide-react";

export const Header = ({ image }: { image?: boolean }) => {
    return (
        <header
            className={cn("flex gap-3", {
                "flex-col items-center text-center": !image,
                "items-center": image,
            })}
        >
            {image && (
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <img src={avatar.src} alt="Profile" className="h-full w-full object-cover" />
                </div>
            )}

            <div className={cn("space-y-2", { "text-center": !image })}>
                <h1 className="text-xl font-bold text-gray-900 uppercase dark:text-white">{name}</h1>
                <div
                    className={cn("flex flex-wrap items-center gap-1 text-xs text-gray-700 dark:text-white", {
                        "justify-center": !image,
                    })}
                >
                    <span>{bio}</span>
                    <span className="mx-1">•</span>
                    <span>{location}</span>
                    <span className="mx-1">•</span>
                    <span>{phone}</span>
                </div>
                <div
                    className={cn("flex flex-wrap items-center gap-3 text-blue-600 dark:text-blue-500", {
                        "justify-center": !image,
                    })}
                >
                    <a
                        href={`mailto:${email}`}
                        className="text-xs hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {email}
                    </a>
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs hover:text-blue-700 hover:underline dark:hover:text-blue-400"
                    >
                        <Globe className="h-3 w-3" />
                        <span>{website.replace(/^https?:\/\//, "")}</span>
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs hover:text-blue-700 hover:underline dark:hover:text-blue-400"
                    >
                        <GitHubDark className="h-3 w-3 dark:hidden" />
                        <GitHubLight className="hidden h-3 w-3 dark:block" />
                        <span>{github.split("github.com/")[1]}</span>
                    </a>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs hover:text-blue-700 hover:underline dark:hover:text-blue-400"
                    >
                        <LinkedIn className="h-3 w-3" />
                        <span>{linkedin.split("linkedin.com/in/")[1]}</span>
                    </a>
                </div>
            </div>
        </header>
    );
};
