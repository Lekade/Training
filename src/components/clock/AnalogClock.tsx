import React, {useEffect, useState} from 'react';
import style from './AnalogClock.module.css'


export const AnalogClock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={style.clock}>
            <div className={style['analog-clock']}>
                <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
                <div className={`${style.dial} ${style.minutes}`} style={minutesStyle} />
                <div className={`${style.dial} ${style.hours}`} style={hoursStyle} />
            </div>
        </div>
    );
};

export default AnalogClock;