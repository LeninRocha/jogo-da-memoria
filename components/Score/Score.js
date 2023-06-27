import styles from './Score.module.scss'
import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import utils from '../../utils/utils'
function Score(props) {
    const [myScore, setMyScore] = useState(false)
    const [active, setActive] = useState(false)
    const [nivel, setNivel] = useState('')
    useEffect(() => {
        
        if (props.level == 5) {
            setNivel('Fácil')
        } else if (props.level == 7) {
            setNivel('Médio')
        } else {
            setNivel('Difícil')
        }
        let score = localStorage.getItem('score'+props.level);
        setMyScore(JSON.parse(score) || [])
        setActive(true)
    }, [props.gameover, props.level])
    return (

        <div className={styles.wrap}>
            <h2 className={styles.title}>Level - {nivel}</h2>
            <div className={styles.header}>
                <span>Jogador</span>
                <span>Tempo</span>
            </div>
            {
                !active ? <> </> :
                    <div>
                        {myScore.map((score) => (
                            <div key={uuid()} className={styles.score}>
                                <p className={styles.p}>{score.jogador}</p>
                                <p className={styles.p}>{utils.formatTime(score.time)}</p>
                            </div>
                        ))}
                    </div>
            }

        </div>
    )

}
export default Score