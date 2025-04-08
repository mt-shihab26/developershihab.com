import { meta } from "~/lib/meta";

const Seperator = () => {
    return <span className="mx-2">•</span>;
};

const Header = ({ image }: { image?: boolean }) => {
    return (
        <header className="space-y-1 w-full items-center text-sm">
            {image && (
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/67628903?v=4"
                        className="h-40"
                    />
                </div>
            )}
            <h1 className="text-4xl text-center font-bold">{meta.name}</h1>
            <div className="text-center">
                <span>Dhaka, Bangladesh</span>
                <Seperator />
                <span>{meta.phone}</span>
                <Seperator />
                <a href={`mailto:${meta.email}`} target="_blank">
                    {meta.email}
                </a>
            </div>
            <div className="text-center">
                <a href={meta.url} target="_blank">
                    developershihab.com
                </a>
                <Seperator />
                <a href={meta.github} target="_blank">
                    github
                </a>
                <Seperator />
                <a href={meta.linkedin} target="_blank">
                    linkedin
                </a>
            </div>
        </header>
    );
};

export { Header };
