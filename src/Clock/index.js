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

    return <span>
        {date.toLocaleDateString("en-GB", {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })}
        {' '}
        {date.toLocaleTimeString()}

    </span>;
}

export default Clock;