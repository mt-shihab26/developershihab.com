const links = [...document.querySelectorAll<HTMLElement>("[data-spy]")];

const targets = links
    .map(link => document.getElementById(link.dataset.spy ?? ""))
    .filter((target): target is HTMLElement => target !== null);

const setActive = (id: string) => {
    for (const link of links) link.dataset.active = String(link.dataset.spy === id);
};

const update = () => {
    const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
    if (atBottom) return setActive(targets[targets.length - 1].id);

    const current = targets.filter(target => target.getBoundingClientRect().top <= 120).at(-1);
    setActive(current?.id ?? "");
};

if (targets.length > 0) {
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
}
