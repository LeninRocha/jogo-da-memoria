import React, { useState, useEffect } from 'react';
import styles from './Cronometro.module.scss'
import utils from '../../utils/utils'
function Cronometro(props) {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        if (props.start) {
            const intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }
        if (props.gameover) {
            let jogador = localStorage.getItem('jogador')
            let minhaLista = localStorage.getItem('score'+props.level);
            let scoreSalvos = JSON.parse(minhaLista) || [];
            let user = {
                jogador: jogador,
                time: seconds,
            }
            scoreSalvos.push(user)
            localStorage.setItem('score'+props.level , JSON.stringify(scoreSalvos))
        }
    }, [props.start, props.gameover, ]);
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Tempo</h1>
            <p className={styles.contador}>{utils.formatTime(seconds)}</p>
        </div>
    )
}
export default Cronometro