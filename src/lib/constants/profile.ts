import { email, name, role, slogan } from "../information";

export const PROFILE_INFO = {
    role: role,
    logo: name,
    slogan: slogan,
    displayName: name,
    email: email,
    about: `
I'm a **software engineer** passionate about crafting high-quality digital experiences. With expertise in **full-stack** development and a strong eye for **UI/UX**, I build **performant, pixel-perfect** applications that are both functional and visually appealing.  
Always **learning**, always **iterating**, always pushing boundaries.  
`,
} as const;
