export const ExternalLink = ({ label, href }: { label: string; href: string }) => {
    return (
        <a href={href} target="_blank" className="font-bold">
            {label}
        </a>
    );
};
