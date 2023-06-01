import { Col } from 'react-bootstrap'
import styles from './Card.module.scss'
import back from "../../assets/card-back.png"
function Card(props) {
    return(
        <Col md="2" onClick={(e) => props.handleFlip(props)}>
            {props.active || props.achou ?
                <img src={props.src} className={styles.img}/>:
                <img src={back.src} className={styles.img}/>
            }
        </Col>
            
    )

}
export default Card