import { meta } from "~/lib/meta";

const Header = () => {
    return (
        <header className="text-sm leading-5 flex items-center justify-between">
            <div className="space-y-1">
                <h1 className="text-4xl font-bold">{meta.name}</h1>
                <p>Full-stack developer having 3+ years of experience</p>
            </div>
            <div className="font-medium">
                <div>Dhaka, Bangladesh</div>
                <div>{meta.email}</div>
                <div>{meta.phone}</div>
            </div>
        </header>
    );
};

export { Header };
