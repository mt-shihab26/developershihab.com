import type { TProject } from "@/types/content";

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import matter from "gray-matter";

/**
 * Extracts YAML frontmatter and content from MDX files in the projects directory
 * @returns Array of project data objects
 */
export const getProjects = (): TProject[] => {
    const projectsDirectory = join(process.cwd(), "src/data/projects");

    try {
        const filenames = readdirSync(projectsDirectory);
        const projects: TProject[] = [];

        for (const filename of filenames) {
            if (!filename.endsWith(".mdx")) continue;

            const filePath = join(projectsDirectory, filename);
            const fileContents = readFileSync(filePath, "utf8");

            // Parse frontmatter and content
            const { data, content } = matter(fileContents);

            // Extract slug from filename (remove .mdx extension)
            const slug = filename.replace(/\.mdx$/, "");

            // Validate required fields
            const project: TProject = {
                name: data.name || "",
                type: data.type || "side",
                preview: data.preview || undefined,
                sourceCode: data.sourceCode || undefined,
                technologies: Array.isArray(data.technologies) ? data.technologies : [],
                description: data.description || "",
                startDate: data.startDate || "",
                slug,
                content: content.trim(),
                resume: data.resume || false,
            };

            projects.push(project);
        }

        // Sort projects by start date (newest first)
        return projects.sort((a, b) => {
            const dateA = new Date(a.startDate);
            const dateB = new Date(b.startDate);
            return dateB.getTime() - dateA.getTime();
        });
    } catch (error) {
        console.error("Error reading projects data:", error);
        return [];
    }
};
