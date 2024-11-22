import type { TBlog, TProject } from "@/content/config";

import About from "@/components/screens/resume/About";
import Blogs from "@/components/screens/resume/Blogs";
import Certification from "@/components/screens/resume/Certification";
import Education from "@/components/screens/resume/Education";
import Experience from "@/components/screens/resume/Experience";
import Hero from "@/components/screens/resume/Hero";
import Projects from "@/components/screens/resume/Projects";
import Skill from "@/components/screens/resume/Skill";

const Resume = ({
    blogs,
    projects,
    featuredProjects
}: {
    blogs: TBlog[];
    projects: TProject[];
    featuredProjects: TProject[];
}) => {
    return (
        <div className="flex w-full flex-col gap-y-10">
            <Hero />
            <About />
            <Blogs blogs={blogs} />
            <Experience projects={projects} />
            <Projects projects={featuredProjects} />
            <Skill />
            <Certification />
            <Education />
        </div>
    );
};

export default Resume;
