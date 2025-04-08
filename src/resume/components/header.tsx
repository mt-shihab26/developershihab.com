import { meta } from "~/lib/meta";

const Header = ({ image }: { image?: boolean }) => {
    return (
        <header className="text-sm">
            {image && (
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/67628903?v=4"
                        className="h-22 mr-2"
                    />
                </div>
            )}
            <div className="space-y-1">
                <h1 className="text-4xl font-bold">{meta.name}</h1>
                <div>
                    <span>Dhaka, Bangladesh</span>
                    <span> </span>
                    <span>{meta.phone}</span>
                    <span> </span>
                    <a href={`mailto:${meta.email}`} target="_blank">
                        {meta.email}
                    </a>
                </div>
                <div className="flex justify-center space-x-2">
                    <a href={meta.url} target="_blank">
                        developershihab.com
                    </a>
                    <span> </span>
                    <a href={meta.github} target="_blank">
                        github
                    </a>
                    <span> </span>
                    <a href={meta.linkedin} target="_blank">
                        linkedin
                    </a>
                </div>
            </div>
        </header>
    );
};

export { Header };
