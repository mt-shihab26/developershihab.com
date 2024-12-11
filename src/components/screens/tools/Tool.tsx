import type { TTool2 } from "@/config/tools";

const Tool = ({ tool }: { tool: TTool2 }) => {
    return (
        <a
            className="group relative hover:bg-transparent"
            href={tool.href}
            id={tool.name}
            target="_blank"
        >
            <div className="relative flex flex-row items-center gap-x-4 px-2 py-0.5 transition-all">
                <div className="absolute -inset-0 z-10 rounded-lg border border-border bg-muted opacity-0 transition-all group-hover:opacity-50" />
                <tool.icon className="z-20 h-10 w-10 rounded-lg bg-muted p-2" />
                <div className="z-20 flex flex-col">
                    <h3 className="font-medium">{tool.name}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                </div>
            </div>
        </a>
    );
};

export default Tool;
