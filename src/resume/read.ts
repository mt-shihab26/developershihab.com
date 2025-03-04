import { readFileSync } from "fs";
import * as yaml from "yaml";

const parseMarkdownFile = (
    filePath: string
): {
    metadata: Record<string, any>;
    content: string;
} => {
    try {
        const fileContent: string = readFileSync(filePath, "utf8");

        if (!fileContent.startsWith("---")) {
            return {
                metadata: {},
                content: fileContent
            };
        }
        const secondDividerIndex = fileContent.indexOf("---", 3);
        if (secondDividerIndex === -1) {
            throw new Error("Invalid YAML frontmatter format: missing closing divider");
        }

        const yamlContent = fileContent.slice(3, secondDividerIndex).trim();
        const content = fileContent.slice(secondDividerIndex + 3).trim();

        const metadata = yaml.parse(yamlContent);

        return { metadata, content };
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error parsing markdown file: ${error.message}`);
        } else {
            console.error("Unknown error parsing markdown file");
        }
        throw error;
    }
};

const readMetadata = (filePath: string): Record<string, any> => {
    if (!filePath) {
        console.error("Please provide a file path as an argument");
        process.exit(1);
    }

    try {
        const { metadata } = parseMarkdownFile(filePath);
        return metadata;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to parse file: ${error.message}`);
        } else {
            console.error("Unknown error occurred");
        }
        process.exit(1);
    }
};

const findMarkdownFiles = async (directory: string): Promise<string[]> => {
    const { readdir } = await import("fs/promises");
    const { join } = await import("path");

    const markdownFiles: string[] = [];

    const entries = await readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
        const entryPath = join(directory, entry.name);

        if (entry.isDirectory()) {
            const nestedFiles = await findMarkdownFiles(entryPath);
            markdownFiles.push(...nestedFiles);
        } else if (entry.isFile() && entry.name.endsWith(".md")) {
            markdownFiles.push(entryPath);
        }
    }

    return markdownFiles;
};

type TProjectMetadata = {
    slug?: string;
    logo: string;
    name: string;
    description: string;
    technologies: string[];
    date: {
        start: string;
        end?: string;
    };
    link: { href: string; label?: string } | undefined;
    live: { href: string; label: string } | undefined;
    case_study: boolean;
    published: boolean;
    featured: boolean;
    resume: boolean;
    order: number;
};

const read = async (): Promise<TProjectMetadata[]> => {
    const files = await findMarkdownFiles("./src/content/projects");
    const projects: TProjectMetadata[] = [];
    for (let i = 0; i < files.length; i++) {
        const metadata = readMetadata(files[i]) as TProjectMetadata;
        projects.push(metadata);
    }
    return projects;
};

export { read };
