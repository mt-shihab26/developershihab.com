import { siteConfig } from "@/config/site";

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);

export const getFormattedDate = (
    date: string | number | Date,
    options?: Intl.DateTimeFormatOptions
) => {
    if (typeof options !== "undefined") {
        return new Date(date).toLocaleDateString(siteConfig.date.locale, {
            ...(siteConfig.date.options as Intl.DateTimeFormatOptions),
            ...options
        });
    }

    return dateFormat.format(new Date(date));
};
