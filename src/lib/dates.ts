import dayjs, { type Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export const PRESENT = "Present";

const INPUT_FORMAT = "MMM YYYY";

export const parseDate = (value: string): Dayjs => {
    if (value === PRESENT) return dayjs();

    const date = dayjs(value, INPUT_FORMAT, true);
    if (!date.isValid()) throw new Error(`Unrecognised date "${value}", use "MMM YYYY", e.g. "May 2023"`);

    return date;
};

export const formatDate = (date: Date): string => {
    return dayjs.utc(date).format("D MMM YYYY");
};

const countMonths = (start: string, end: string = PRESENT): number => {
    return parseDate(end).startOf("month").diff(parseDate(start).startOf("month"), "month") + 1;
};

export const yearsSince = (start: string): number => {
    return Math.floor(countMonths(start) / 12);
};

export const yearsBetween = (start: string, end: string): number => {
    return Math.round((countMonths(start, end) - 1) / 6) / 2;
};

export const formatRange = (start: string, end: string = PRESENT): string => {
    return `${start} – ${end}`;
};

export const formatDuration = (start: string, end: string = PRESENT): string => {
    const totalMonths = countMonths(start, end);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mo`;
    if (months === 0) return `${years} yr`;
    return `${years} yr ${months} mo`;
};

export const formatYears = (years: number): string => {
    if (years < 1) return "< 1 yr";
    return `${years} ${years === 1 ? "yr" : "yrs"}`;
};

export const compareDatesDesc = (a: string, b: string): number => {
    return parseDate(b).valueOf() - parseDate(a).valueOf();
};
