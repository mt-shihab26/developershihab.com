import { socials } from "@/config/site";

const ContactEmail = () => {
    return (
        <a
            href={`mailto:${socials.email}`}
            className="inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"
        >
            <span className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <p className="font-medium">Contact Via Email</p>
        </a>
    );
};

export default ContactEmail;
