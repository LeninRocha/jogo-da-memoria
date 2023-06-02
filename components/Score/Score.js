import styles from './Score.module.scss'
import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import utils from '../../utils/utils'
function Score(props) {
    const [myScore, setMyScore] = useState(false)
    const [active, setActive] = useState(false)
    useEffect(()=>{
        let score = localStorage.getItem('score');
        setMyScore(JSON.parse(score) || [])
        setActive(true)
    },[props.gameover])
    console.log(myScore)
    return(

            <div className={styles.wrap}>
                <h2 className={styles.title}>Score</h2>
                <div className={styles.header}>
                    <span>Jogador</span> 
                    <span>Tempo</span>
                </div>
                {
                    !active ? <> </>:
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