import MarkdownIt from "markdown-it";

export { cn } from "cn";

export const separator = "•";

const md = new MarkdownIt();

export const getLineCount = (text: string | undefined): number => {
    const lines = (text ?? "").split("\n").filter(line => {
        return line.trim() !== "";
    });

    return lines.length;
};

export const markdownToHtml = (markdown: string, className?: string): string => {
    md.renderer.rules.paragraph_open = () => {
        return `<p class="${className}">`;
    };

    return md.render(markdown);
};
