export const toggleClass = (element: HTMLElement, className: string) => {
	element.classList.toggle(className);
};

export const elementHasClass = (element: HTMLElement, className: string) => {
	return element.classList.contains(className);
};

export const rootInDarkMode = () => {
	return document.documentElement.getAttribute('data-theme') === 'dark';
};
