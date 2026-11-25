import dayjs, { type Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(utc);

export const PRESENT = "Present";

export const dateParseMonthYear = (value: string): Dayjs => {
    if (value === PRESENT) return dayjs();
    const INPUT_FORMAT = "MMM YYYY";
    const date = dayjs(value, INPUT_FORMAT, true);
    if (!date.isValid()) {
        throw new Error(`Unrecognised date "${value}", use "MMM YYYY", e.g. "May 2023"`);
    }
    return date;
};

export const dateFormatDayMonthYear = (date: Date): string => {
    return dayjs.utc(date).format("D MMM YYYY");
};

const dateCountMonthsBetween = (start: string, end: string = PRESENT): number => {
    return dateParseMonthYear(end).startOf("month").diff(dateParseMonthYear(start).startOf("month"), "month") + 1;
};

export const dateCountYearsSince = (start: string): number => {
    return dayjs.duration(dateCountMonthsBetween(start), "months").years();
};

export const dateCountYearsBetween = (start: string, end: string): number => {
    return Math.round((dateCountMonthsBetween(start, end) - 1) / 6) / 2;
};

export const dateFormatRange = (start: string, end: string = PRESENT): string => {
    return `${start} – ${end}`;
};

export const dateFormatDuration = (start: string, end: string = PRESENT): string => {
    const span = dayjs.duration(dateCountMonthsBetween(start, end), "months");
    const years = span.years();
    const months = span.months();

    if (years === 0) return `${months} mo`;
    if (months === 0) return `${years} yr`;
    return `${years} yr ${months} mo`;
};

export const dateFormatYearCount = (years: number): string => {
    if (years < 1) return "< 1 yr";
    return `${years} ${years === 1 ? "yr" : "yrs"}`;
};

export const dateCompareDesc = (a: string, b: string): number => {
    return dateParseMonthYear(b).diff(dateParseMonthYear(a));
};
