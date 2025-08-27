import { email, name, role, slogan } from "../information";

export const PROFILE_INFO = {
    role: role,
    logo: name,
    slogan: slogan,
    displayName: name,
    email: email,
} as const;
