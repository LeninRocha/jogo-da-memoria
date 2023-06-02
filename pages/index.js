import React from 'react'
import styles from './index.module.scss'

import {Container} from 'react-bootstrap'
import Jogador from '@/components/Jogador/Jogador'
import Header from '@/components/Header/Header'

const index = () => {
  return (
    <main>
        <Header/>
        <Container>
            <div className={styles.w50} sm={12}>

                <h1 className={styles.title}>
                    Jogo da memória<br/>
                    Com deputados<br/>
                </h1>
                <Jogador/>

            </div>
            <div className={styles.w50} sm={12}>
                <div className={styles.fundo}></div>
            </div>
        </Container>
    </main>
  )
}

export default index