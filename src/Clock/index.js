import { useState, useEffect } from "react";
import "./style.css";

function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return <span className="dateAndClock">
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

    </span>;
}

export default Clock;