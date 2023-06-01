import React from 'react'
import styles from './index.module.scss'

import {Container} from 'react-bootstrap'
import Jogador from '@/components/Jogador/Jogador'

const index = () => {
  return (
    <main>
        <Container>
            <div className={styles.w100}><div className={styles.logo}></div></div>
            <div className={styles.w50}>

                <h1 className={styles.title}>
                    Jogo da memória<br/>
                    Com deputados<br/>
                </h1>
                <Jogador/>

            </div>
            <div className={styles.w50}>
                <div className={styles.fundo}>

                </div>
            </div>
        </Container>
    </main>
  )
}

export default index