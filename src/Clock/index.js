import { useState, useEffect } from "react";
import { TimeAndDate } from "./styled";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <TimeAndDate>
            Dzisiaj jest
            {' '}
            {date.toLocaleDateString("pl-PL", {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}
            {' '}
            {date.toLocaleTimeString()}
        </TimeAndDate>
    );
}

export default Clock;