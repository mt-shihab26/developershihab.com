import captainhook from "~/assets/svgs/captainhook.svg";
import fleek from "~/assets/svgs/fleeksvg.svg";
import golang from "~/assets/svgs/icons8-golang.svg";
import kubernetes from "~/assets/svgs/kubernetes.svg";
import vanilla from "~/assets/svgs/vanilla.svg";

export const projects = [
    {
        name: "Fleek",
        description: "Install and manage all the tools you need to be productive.",
        link: { href: "https://getfleek.dev", label: "getfleek.dev", external: true },
        logo: fleek
    },
    {
        name: "Vanilla OS",
        description:
            "Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.",
        link: { href: "https://vanillaos.org", label: "vanillaos.org" },
        logo: vanilla
    },
    {
        name: "Captain Hook",
        description: "Custom commands as webhooks.",
        link: { href: "https://github.com/bketelsen/captainhook", label: "github.com" },
        logo: captainhook
    },
    {
        name: "Kubernetes",
        description: "Production-Grade Container Scheduling and Management",
        link: { href: "https://github.com/kubernetes/kubernetes", label: "github.com" },
        logo: kubernetes
    },
    {
        name: "Go",
        description: "Build fast, reliable, and efficient software at scale",
        link: { href: "https://go.dev", label: "go.dev" },
        logo: golang
    }
];
