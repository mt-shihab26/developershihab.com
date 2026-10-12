type TEducation = {
    institution: { label: string; link: string };
    positions: {
        title: string;
        year: string;
        description?: string[];
    }[];
};

export const educations: TEducation[] = [
    {
        institution: {
            label: "Bangladesh University of Business and Technology (BUBT)",
            link: "https://bubt.edu.bd",
        },
        positions: [
            {
                title: "B.Sc in Computer Science and Engineering",
                year: "May 2025 – Present",
                description: [
                    "Studying alongside my software engineering work at Finnext",
                    "Continuing from my Diploma in Computer Science",
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
                year: "Dec 2021 – Aug 2025",
                description: [
                    "Took part in competitive programming contests at the institute",
                    "Active member of the competitive programming community",
                ],
            },
        ],
    },
];
