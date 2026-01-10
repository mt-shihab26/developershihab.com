import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export const SeeMore = ({
    open: x,
    items = [],
    skills,
}: {
    open: boolean;
    items: string[];
    skills?: string[] | null;
}) => {
    const [show, setShow] = useState<boolean>(x || false);

    return (
        <div className="my-4 overflow-hidden">
            {show && (
                <div className="overflow-hidden transition-all duration-300">
                    <div className="ml-7 text-sm leading-7">
                        {items.map(item => (
                            <div
                                key={item}
                                dangerouslySetInnerHTML={{
                                    __html: md.render(`- ♦ ${item}`),
                                }}
                            />
                        ))}
                    </div>
                    {Array.isArray(skills) && skills.length > 0 && (
                        <div className="mt-2 ml-7 flex max-w-full flex-wrap items-center justify-start gap-1.5 py-2">
                            {skills.map(skill => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-md border !border-solid px-2 py-0.5 text-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <button
                onClick={() => setShow(prev => !prev)}
                className="mt-2 ml-7 flex cursor-pointer items-center gap-1 rounded-md border px-4 py-2 text-xs font-medium text-primary hover:underline focus:outline-none"
            >
                <span className="">{show ? "Show less" : "Show more"}</span>
                {show ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>
        </div>
    );
};
