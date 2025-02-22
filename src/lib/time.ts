const time = {
    formatDate: (date: string) => {
        return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC"
        });
    },
    formatMonthYear: (date: string) => {
        const dt = new Date(`${date}T00:00:00Z`);
        var month = dt.toLocaleString("default", { month: "long" });
        var year = dt.toLocaleString("default", { year: "numeric" });

        return month + " " + year;
    },
    formatToLongDate: (date: Date | string): string => {
        const dateObject: Date = date instanceof Date ? date : new Date(date);

        if (isNaN(dateObject.getTime())) {
            throw new Error("Invalid date provided");
        }

        return dateObject.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
};

export { time };
