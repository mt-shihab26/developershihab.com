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
    }
};

export { time };
