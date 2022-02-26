import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    return {
        days: getRemainingDays(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        day: Days(nowDayjs, timestampDayjs),
        hour: Hours(nowDayjs, timestampDayjs),
        minute: Minutes(nowDayjs, timestampDayjs),
        second: Seconds(nowDayjs, timestampDayjs)
    }
}

function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return hours.toString();
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return minutes.toString();
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return seconds.toString();
}

function Days(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    if (days <= 1) return 'Day';
    return 'Days';
}

function Hours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    if (hours <= 1) return 'Hour';
    return 'Hours';
}

function Minutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    if (minutes <= 1) return 'Minute';
    return 'Minutes';
}

function Seconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    if (seconds <= 1) return 'Second';
    return 'Seconds';
}