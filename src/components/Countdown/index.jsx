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
            <h2 class='day'>{remainingTime.days}</h2>
            <h2 class='hour'>{remainingTime.hours}</h2>
            <h2 class='minute'>{remainingTime.minutes}</h2>
            <h2 class='second'>{remainingTime.seconds}</h2>
            <p class='days'>Days</p><p class='hours'>Hours</p><p class='minutes'>Minutes</p><p class='seconds'>Seconds</p>
        </div>
    )
}

export default Countdown