import { meta } from "~/lib/meta";

const Header = () => {
    return (
        <header className="flex text-sm leading-1 items-center justify-between">
            <div className="space-y-1">
                <h1 className="text-4xl font-bold">{meta.name}</h1>
                <p>Full-stack developer having 3+ years of experience</p>
            </div>
            <div>
                <div>Dhaka, Bangladesh</div>
                <div className="font-medium">{meta.email}</div>
                <div className="font-medium">{meta.phone}</div>
            </div>
        </header>
    );
};

export { Header };
