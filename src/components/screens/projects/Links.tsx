import { ExternalLinkIcon, GithubIcon } from "@/components/composite/icons";
import { Button } from "@/components/ui/button";

const LiveLinkButton = ({ href }: { href: string }) => {
    return (
        <Button variant="outline" size="sm" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Live
            </a>
        </Button>
    );
};

const GithubButton = ({ href }: { href: string }) => {
    return (
        <Button variant="outline" size="sm" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                Source
            </a>
        </Button>
    );
};

const Links = ({ links }: { links: { live_link?: string; source_code?: string } }) => {
    return (
        <div className="flex space-x-2">
            {links.live_link && <LiveLinkButton href={links.live_link} />}
            {links.source_code && <GithubButton href={links.source_code} />}
        </div>
    );
};

export default Links;
