import dayjs, { type Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export const PRESENT = "Present";

// Hand-written dates in lib data are always month and year, e.g. "May 2023"
const INPUT_FORMAT = "MMM YYYY";

/**
 * Parses a hand-written date such as "May 2023". "Present" means today.
 */
export const parseDate = (value: string): Dayjs => {
    if (value === PRESENT) return dayjs();

    const date = dayjs(value, INPUT_FORMAT, true);
    if (!date.isValid()) throw new Error(`Unrecognised date "${value}", use "MMM YYYY", e.g. "May 2023"`);

    return date;
};

/**
 * The one date format used across the site, e.g. "21 Nov 2026".
 * Content dates are stored as UTC midnight, so formatting in UTC keeps the day from shifting.
 */
export const formatDate = (date: Date): string => dayjs.utc(date).format("D MMM YYYY");

/**
 * Calendar months from start to end, counting both, e.g. May 2025 – Nov 2026 is 19
 */
const countMonths = (start: string, end: string = PRESENT): number =>
    parseDate(end).startOf("month").diff(parseDate(start).startOf("month"), "month") + 1;

export const yearsSince = (start: string): number => Math.floor(countMonths(start) / 12);

/**
 * Years between two dates, rounded to the nearest half year
 */
export const yearsBetween = (start: string, end: string): number => Math.round((countMonths(start, end) - 1) / 6) / 2;

/**
 * "May 2023" to "Present" becomes "May 2023 – Present"
 */
export const formatRange = (start: string, end: string = PRESENT): string => `${start} – ${end}`;

/**
 * "May 2023" to "Present" becomes "3 yr 7 mo"
 */
export const formatDuration = (start: string, end: string = PRESENT): string => {
    const totalMonths = countMonths(start, end);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mo`;
    if (months === 0) return `${years} yr`;
    return `${years} yr ${months} mo`;
};

/**
 * Short years label for skills, e.g. "< 1 yr", "1 yr", "4 yrs"
 */
export const formatYears = (years: number): string => {
    if (years < 1) return "< 1 yr";
    return `${years} ${years === 1 ? "yr" : "yrs"}`;
};

/**
 * Newest first, for sorting by hand-written dates
 */
export const compareDatesDesc = (a: string, b: string): number => parseDate(b).valueOf() - parseDate(a).valueOf();
