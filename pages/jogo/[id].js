import Card from '@/components/Card/Card'
import Cronometro from '@/components/Cronometro/Cronometro';
import api from '@/services/api'
import { Col, Container, Row } from 'react-bootstrap'
import uuid from 'react-uuid';
import React, { useEffect, useState } from 'react';
import Score from '@/components/Score/Score';
import ModalCandidato from '@/components/ModalCandidato/ModalCandidato';
import Endgame from '@/components/Endgame/Endgame';
import Header from '@/components/Header/Header';
const index = ({ deputados, level }) => {
    const [cardFlip, setCardFlip] = useState([])
    const [achou, setAchou] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [start, setStart] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [deputado, setDeputado] = useState('');
    function handleFlip(props) {
        setStart(true)
        if (cardFlip.length == 2) {
            setCardFlip([props])
        } else {
            if (!cardFlip.includes(props)) {
                const arreyCardFlip = [...cardFlip]
                arreyCardFlip.push(props)
                setCardFlip(arreyCardFlip)
                for (let i = 0; i < cardFlip.length; i++) {
                    if (cardFlip[i].id == props.id) {
                        const arrayAchou = [...achou]
                        arrayAchou.push(props.id)
                        setShowModal(true)
                        setStart(false)
                        setDeputado(props.id)
                        setAchou(arrayAchou)
                    }
                }
            }
        }

    }
    function verificarAtivo(id, index) {
        for (let i = 0; i < cardFlip.length; i++) {
            if (cardFlip[i].id == id && cardFlip[i].index == index) {
                return true
            }
        }
    }

    useEffect(() => {
        if (deputados.length == achou.length * 2) {
            setGameOver(true)
        }
    }, [achou])

    return (
        <main>
            <Header/>
            <Container >
                <Row>
                    <Col md="9">
                        {gameOver ? (<Endgame/>) :(
                        <Row className="justify-content-center">
                            {deputados.map((deputados, i) => (
                            
                                <Card
                                    key={uuid()}
                                    src={deputados.urlFoto}
                                    active={verificarAtivo(deputados.id, i)}
                                    achou={achou.includes(deputados.id)}
                                    id={deputados.id}
                                    index={i}
                                    handleFlip={handleFlip}
                                />
                            ))}
                        </Row>
                        )
                        }

                        
                    </Col>
                    <Col md="3">
                        <Cronometro
                        start={start}
                        gameover={gameOver}
                        level={level}    
                        />
                        <Score 
                            gameover={gameOver}
                            level={level}    
                        />
                    </Col>
                </Row>
                
            </Container>
            <div>
                <ModalCandidato 
                showModal={showModal}
                deputado={deputado}
                />
            </div>
        </main>
    )
}

export default index

export async function getServerSideProps(context) {
    const level = context.params.id
    const res = await api.get('/deputados')
    var newRes = res.data.dados
    //selecionando 5 aleatorios
    const results = newRes.sort(() => 0.5 - Math.random());
    const selected = results.slice(0, level);
    //duplicar o array
    const arrayConcat = selected.concat(selected)
    //array aleatorio
    const randomComparator = () => Math.random() - 0.5;
    const deputados = arrayConcat.sort(randomComparator);
    return {
        props: { deputados, level },
    }
}


