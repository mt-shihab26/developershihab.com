import { name } from "~/lib/info";
import { socialHrefs } from "~/lib/links";

const Seperator = () => {
    return <span className="mx-2">•</span>;
};

const Header = ({ image }: { image?: boolean }) => {
    return (
        <header className="w-full items-center space-y-1 text-sm">
            {image && (
                <div className="flex flex-col items-center justify-center">
                    <img src="https://avatars.githubusercontent.com/u/67628903?v=4" className="h-40" />
                </div>
            )}
            <h1 className="text-center text-4xl font-bold">{name}</h1>
            <div className="text-center">
                <span>Dhaka, Bangladesh</span>
                <Seperator />
                <span>{socialHrefs.phone}</span>
                <Seperator />
                <a href={`mailto:${socialHrefs.email}`} target="_blank">
                    {socialHrefs.email}
                </a>
            </div>
            <div className="text-center">
                <a href={socialHrefs.website} target="_blank">
                    website
                </a>
                <Seperator />
                <a href={socialHrefs.github} target="_blank">
                    github
                </a>
                <Seperator />
                <a href={socialHrefs.linkedin} target="_blank">
                    linkedin
                </a>
            </div>
        </header>
    );
};

export { Header };
