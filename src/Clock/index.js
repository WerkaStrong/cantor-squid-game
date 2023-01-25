import { useCurrentDate } from "../useCurrentDate";
import { TimeAndDate } from "./styled";

export const Clock = () => {
    const date = useCurrentDate();

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
