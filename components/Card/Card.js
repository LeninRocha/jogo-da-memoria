import { Col } from 'react-bootstrap'
import styles from './Card.module.scss'
import back from "../../assets/card-back.png"

function Card(props) {
    const card = `${props.active || props.achou ? styles.active : ''} ${styles.card}`
    const cardfront = `${styles.img} ${styles.imgfront}`
    const cardback = `${styles.img} ${styles.imgback}`
    return(
        <Col md="2" xs="3" onClick={(e) => props.handleFlip(props) } className={card}>
            {   <>
                    <img src={props.src} className={cardfront}/>
                    <img src={back.src} className={cardback}/>
                </>
                
            }
        </Col>
            
    )

}
export default Card