interface FormattedDateProps extends React.TimeHTMLAttributes<HTMLTimeElement> {
    date: Date;
    dateTimeOptions?: Intl.DateTimeFormatOptions;
}

const getFormattedDate = (
    date: Date,
    options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric"
    }
) => {
    return new Intl.DateTimeFormat("en-US", options).format(date);
};

const FormattedDate = ({ date, dateTimeOptions, ...props }: FormattedDateProps) => {
    const formattedDate = getFormattedDate(date, dateTimeOptions);

    return (
        <time dateTime={date.toISOString()} {...props}>
            {formattedDate}
        </time>
    );
};

export default FormattedDate;
