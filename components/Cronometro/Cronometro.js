import React, { useState, useEffect } from 'react';
import styles from './Cronometro.module.scss'
function Cronometro(props) {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        if(props.start){
            const intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
    
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [props.start]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Tempo</h1>
            <p className={styles.contador}>{formatTime(seconds)}</p>
        </div>
    )
}
export default Cronometro