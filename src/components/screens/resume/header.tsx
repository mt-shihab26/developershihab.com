import { meta } from "~/lib/meta";

const Header = () => {
    return (
        <header className="pb-2 flex items-center">
            <div className="w-[70%] space-y-1">
                <h1 className="text-4xl font-bold">{meta.name}</h1>
                <p>Full-stack developer having 3+ years of experience</p>
            </div>
            <div className="w-[30%] text-xs">
                <div>Dhaka, Bangladesh</div>
                <div>{meta.phone}</div>
                <div>
                    <a href={`mailto:${meta.email}`} target="_blank">
                        {meta.email}
                    </a>
                </div>
                <div>
                    <a href={meta.url} target="_blank">
                        developershihab.com
                    </a>
                </div>
            </div>
        </header>
    );
};

export { Header };
