import styles from "./styles/btnschedule.module.css"
import { scrollToSec } from "../../lib/scrollToSec"

export const BtnSchedule = () => {
    return (
        <a className={styles.btn} href="#contato"
            onClick={(e) => scrollToSec(e)}
        >
            Agende sua consulta
        </a>
    )
}
