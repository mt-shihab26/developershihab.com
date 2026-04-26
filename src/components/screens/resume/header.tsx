import { cn } from "@/lib/utils";

import { avatar } from "@/lib/files";
import { bio, email, github, linkedin, location, name, phone, website } from "@/lib/information";

import { GitHubDark, GitHubLight, LinkedIn } from "developer-icons";
import { Globe, Mail } from "lucide-react";

export const Header = ({ image }: { image?: boolean }) => {
    return (
        <header
            className={cn("flex gap-3", {
                "flex-col items-center text-center": !image,
                "items-center": image,
            })}
        >
            {image && (
                <div className="size-20 overflow-hidden rounded-full">
                    <img src={avatar.src} alt="Profile" className="h-full w-full object-cover" />
                </div>
            )}
            <div
                className={cn("space-y-1", {
                    "text-center": !image,
                })}
            >
                <h1 className="text-[18px] font-bold uppercase">{name}</h1>
                <div
                    className={cn("flex items-center gap-2", {
                        "justify-center": !image,
                    })}
                >
                    <div>{bio}</div>
                    <div>•</div>
                    <div>{location}</div>
                    <div>•</div>
                    <div>{phone}</div>
                </div>
                <div
                    className={cn("flex items-center gap-2", {
                        "justify-center": !image,
                    })}
                >
                    <a href={`mailto:${email}`} className="flex items-center gap-0.5 underline" target="_blank" rel="noopener noreferrer">
                        <Mail className="h-3 w-3" />
                        <span>{email}</span>
                    </a>
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 underline"
                    >
                        <Globe className="h-3 w-3" />
                        <span>{website.replace(/^https?:\/\//, "")}</span>
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 underline"
                    >
                        <GitHubDark className="h-3 w-3 dark:hidden" />
                        <GitHubLight className="hidden h-3 w-3 dark:block" />
                        <span>{github.split("github.com/")[1]}</span>
                    </a>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 underline"
                    >
                        <LinkedIn className="h-3 w-3" />
                        <span>{linkedin.split("linkedin.com/in/")[1]}</span>
                    </a>
                </div>
            </div>
        </header>
    );
};
