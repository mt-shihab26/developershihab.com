import type { TEducation } from "@/types/content";

export const educations: TEducation[] = [
    {
        institution: {
            label: "Bangladesh University of Business and Technology (BUBT)",
            link: "https://bubt.edu.bd",
        },
        positions: [
            {
                title: "B.Sc. in Computer Science and Engineering",
                start_date: "May 2025",
                description: [
                    "Studying full-time while working part-time as a contract software engineer at Finnext",
                    "Coursework in algorithms, operating systems, databases, computer networks, and software engineering",
                    "Learning graphics programming with OpenGL and building a toy game engine",
                ],
            },
        ],
    },
    {
        institution: {
            label: "Faridpur Polytechnic Institute",
            link: "https://polytechnic.faridpur.gov.bd",
        },
        positions: [
            {
                title: "Diploma in Engineering, Computer Science",
                start_date: "Dec 2021",
                end_date: "Aug 2025",
                description: [
                    "Learned programming in C, then moved on to data structures, algorithms, and web development",
                    "Competed in contests and solved 1,000+ problems on Codeforces, LightOJ, LeetCode",
                    "Active member of the competitive programming community, practicing and learning with other students",
                ],
            },
        ],
    },
];
