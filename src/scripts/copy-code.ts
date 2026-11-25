const label = "Copy";

for (const block of document.querySelectorAll<HTMLElement>("article pre")) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    block.before(wrapper);
    wrapper.appendChild(block);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code";
    button.textContent = label;
    block.appendChild(button);

    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(block.querySelector("code")?.innerText ?? "");
        } catch {
            return;
        }
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = label), 1000);
    });
}
