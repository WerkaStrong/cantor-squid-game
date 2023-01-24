import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <span className="dateAndClock">
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
        </span>
    );
}

export default Clock;