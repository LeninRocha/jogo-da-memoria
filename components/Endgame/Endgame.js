import Link from "next/link"
import styles from './Endgame.module.scss'
function Endgame() {
    return (

        <div className={styles.wrap}>
            <div className={styles.ganhou}>
                <h1>Você Ganhouuuu!</h1>
                <button className={styles.btnHome}>
                    <Link href="/">Jogar novamente</Link>
                </button>
            </div>
        </div>
    )
}
export default Endgame