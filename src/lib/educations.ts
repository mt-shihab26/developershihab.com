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
            label: "Faridpur Polytechnic Institute",
            link: "https://polytechnic.faridpur.gov.bd",
        },
        positions: [
            {
                title: "Diploma in Engineering, Computer Science",
                year: "August 2025 – Present",
                description: [
                    "Involved in **Competitive Programming contests** at the institution",
                    "Actively participating in the **Competitive Programming Community**",
                ],
            },
        ],
    },
    {
        institution: {
            label: "Bangladesh University of Business and Technology (BUBT)",
            link: "https://bubt.edu.bd",
        },
        positions: [
            {
                title: "B.Sc in Computer Science and Engineering",
                year: "Dropout",
            },
        ],
    },
];
