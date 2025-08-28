import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

export const SeeMore = ({ items }: { items: string[] }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="my-4 overflow-hidden">
            {open && (
                <div className="overflow-hidden transition-all duration-300">
                    <div className="ml-7 text-sm leading-7">
                        {items.map(item => (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: md.render(`- ♦ ${item}`),
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
            <button
                onClick={() => setOpen(open => !open)}
                className="mt-2 ml-7 flex cursor-pointer items-center gap-1 rounded-md border px-4 py-2 text-xs font-medium text-primary hover:underline focus:outline-none"
            >
                <span className="">{open ? "Show less" : "Show more"}</span>
                {open ? (
                    <ChevronUp className="size-4" />
                ) : (
                    <ChevronDown className="size-4" />
                )}
            </button>
        </div>
    );
};
