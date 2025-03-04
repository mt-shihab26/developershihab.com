import { meta } from "~/lib/meta";

const Header = () => {
    return (
        <header className="flex h-full items-center">
            <div className="w-[70%] h-full space-y-1 flex flex-col justify-center">
                <h1 className="text-4xl font-bold">{meta.name}</h1>
                <p>Full-stack developer having 3+ years of experience</p>
                <div>Dhaka, Bangladesh</div>
            </div>
            <div className="w-[30%] flex h-full justify-center flex-col space-y-0.5 text-xs">
                <div>{meta.phone}</div>
                <a href={`mailto:${meta.email}`} target="_blank">
                    {meta.email}
                </a>
                <a href={meta.url} target="_blank">
                    developershihab.com
                </a>
                <a href={meta.github} target="_blank">
                    github.com/p-nerd
                </a>
                <a href={meta.linkedin} target="_blank">
                    linkedin.com/in/shihab-mahamud
                </a>
            </div>
        </header>
    );
};

export { Header };
