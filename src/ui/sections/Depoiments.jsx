import { BtnSchedule } from "../components/BtnSchedule"
import styles from "./styles/depoiments_section.module.css"
import YouTube from "react-youtube"

export const Depoiments = () => {
    const opts = {
        height: '290',
        width: '440',
        playerVars: {
            autoplay: 0,
        }
    }

    return(
        <section id = "depoiments_section" className = { styles.depoiments_section } >
            <h2>Depoimentos</h2>
            <h3>GARANTIMOS OS MELHORES RESULTADOS AOS NOSSOS PACIENTES!</h3>
            <h4>Confira o depoimento de nossos pacientes, realizamos o tratamento mais moderno e funcional da atualidade, agende sua consulta para conhecer mais.</h4>
            <div className={styles.yt_container}>
                <YouTube videoId="1DnSiznUrVI" opts={opts} />
                <YouTube videoId="1DnSiznUrVI" opts={opts} />                
            </div>
            <BtnSchedule />
        </section >
    )
}

export default Depoiments