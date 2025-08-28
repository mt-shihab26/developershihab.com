type TEducation = {
    institution: { label: string; link: string };
    positions: {
        title: string;
        year: string;
        description: string[];
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
                year: "August 2025 – Present",
                description: [
                    "Pursuing a **Bachelor's degree in Computer Science and Engineering (CSE)**",
                    "Involved in **Competitive Programming contests** at the institution",
                    "Actively participating in the **Competitive Programming Community at BUBT**",
                ],
            },
        ],
    },
];
