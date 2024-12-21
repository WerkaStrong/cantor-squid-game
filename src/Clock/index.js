import { useCurrentDate } from '../useCurrentDate';
import { TimeAndDate } from './styled';

export const Clock = () => {
    const date = useCurrentDate();
    return (
        <TimeAndDate>
            Today is{' '}
            {date.toLocaleDateString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}{' '}
            {date.toLocaleTimeString()}
        </TimeAndDate>
    );
};
