import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs';
import './Countdown.css'
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownUtils';

const defaultRemainingTime = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    day: 'Day',
    hour: 'Hour',
    minute: 'Minute',
    second: 'Second'
}

const Countdown = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    const [isCountdownFinished, setIsCountdownFinished] = useState(false);

    let timeNow = dayjs().valueOf();

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs])

    useEffect(() => {
        if (timeNow > countdownTimestampMs) {
            setIsCountdownFinished(true);
        }
    }, [timeNow, countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        isCountdownFinished ?
            <div></div> :
            <>
                <p>Days until I have finished grades 11</p>
                <div className='countdown'>
                    <h2 className='day'>{remainingTime.days}</h2>
                    <h2 className='hour'>{remainingTime.hours}</h2>
                    <h2 className='minute'>{remainingTime.minutes}</h2>
                    <h2 className='second'>{remainingTime.seconds}</h2>
                    <p className='days'>{remainingTime.day}</p><p className='hours'>{remainingTime.hour}</p><p className='minutes'>{remainingTime.minute}</p><p className='seconds'>{remainingTime.second}</p>
                </div>
            </>
    )
}

export default Countdown