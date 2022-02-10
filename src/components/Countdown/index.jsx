import React, { useState, useEffect } from 'react'
import './Countdown.css'
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownUtils';

const defaultRemainingTime = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
}

const Countdown = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className='countdown'>
            <h2 id='day'>{remainingTime.days}</h2>
            <h2 id='hour'>{remainingTime.hours}</h2>
            <h2 id='minute'>{remainingTime.minutes}</h2>
            <h2 id='second'>{remainingTime.seconds}</h2>
            <p>Days</p><p>Hours</p><p>Minutes</p><p>Seconds</p>
        </div>
    )
}

export default Countdown