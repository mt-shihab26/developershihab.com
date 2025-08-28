import type { TProject } from "@/types/content";
import type { CollectionEntry } from "astro:content";

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import matter from "gray-matter";

/**
 * Extracts YAML frontmatter and content from MDX files in the projects directory
 */
export const getProjectsRow = (): TProject[] => {
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
                priority: data.priority || 999,
                draft: data.draft || false,
            };

            // Only add non-draft projects
            if (!project.draft) {
                projects.push(project);
            }
        }

        // Sort projects by priority (lowest number first), then by start date (newest first)
        return projects.sort((a, b) => {
            // First sort by priority
            if (a.priority !== b.priority) {
                return (a.priority || 999) - (b.priority || 999);
            }
            // If priority is the same, sort by start date (newest first)
            const dateA = new Date(a.startDate);
            const dateB = new Date(b.startDate);
            return dateB.getTime() - dateA.getTime();
        });
    } catch (error) {
        console.error("Error reading projects data:", error);
        return [];
    }
};

/**
 * Filters out draft projects and sorts by priority (lower numbers first), then by name
 */
export const sortProjectsByPriority = (projects: CollectionEntry<"projects">[]): CollectionEntry<"projects">[] => {
    return projects
        .filter(project => !project.data.draft)
        .sort((a, b) => {
            const priorityA = a.data.priority || 999;
            const priorityB = b.data.priority || 999;

            if (priorityA !== priorityB) {
                return priorityA - priorityB;
            }

            // If same priority, sort alphabetically by name as fallback
            return a.data.name.localeCompare(b.data.name);
        });
};

/**
 * Filters and sorts core projects from Astro collection
 */
export const getCoreProjects = (projects: CollectionEntry<"projects">[]): CollectionEntry<"projects">[] => {
    const sortedProjects = sortProjectsByPriority(projects);
    return sortedProjects.filter(project => project.data.type === "core");
};

/**
 * Filters and sorts side projects from Astro collection
 */
export const getSideProjects = (projects: CollectionEntry<"projects">[]): CollectionEntry<"projects">[] => {
    const sortedProjects = sortProjectsByPriority(projects);
    return sortedProjects.filter(project => project.data.type === "side");
};
