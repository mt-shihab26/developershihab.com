import dayjs, { type Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export const PRESENT = "Present";

export const parseMonthYear = (value: string): Dayjs => {
    if (value === PRESENT) return dayjs();
    const INPUT_FORMAT = "MMM YYYY";
    const date = dayjs(value, INPUT_FORMAT, true);
    if (!date.isValid()) {
        throw new Error(`Unrecognised date "${value}", use "MMM YYYY", e.g. "May 2023"`);
    }
    return date;
};

export const formatDayMonthYear = (date: Date): string => {
    return dayjs.utc(date).format("D MMM YYYY");
};

const countMonthsBetween = (start: string, end: string = PRESENT): number => {
    return parseMonthYear(end).startOf("month").diff(parseMonthYear(start).startOf("month"), "month") + 1;
};

export const countYearsSince = (start: string): number => {
    return Math.floor(countMonthsBetween(start) / 12);
};

export const countYearsBetween = (start: string, end: string): number => {
    return Math.round((countMonthsBetween(start, end) - 1) / 6) / 2;
};

export const formatDateRange = (start: string, end: string = PRESENT): string => {
    return `${start} – ${end}`;
};

export const formatDurationBetween = (start: string, end: string = PRESENT): string => {
    const totalMonths = countMonthsBetween(start, end);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mo`;
    if (months === 0) return `${years} yr`;
    return `${years} yr ${months} mo`;
};

export const formatYearCount = (years: number): string => {
    if (years < 1) return "< 1 yr";
    return `${years} ${years === 1 ? "yr" : "yrs"}`;
};

export const compareMonthYearDesc = (a: string, b: string): number => {
    return parseMonthYear(b).valueOf() - parseMonthYear(a).valueOf();
};
