import { BtnSchedule } from "../components/BtnSchedule"
import styles from "./styles/depoiments_section.module.css"

export const Depoiments = () => {

    const RenderYTVid = ({id_yt}) => {
        return (
            <iframe width="470" height="270" src={`https://www.youtube.com/embed/${id_yt}?si=Btq1gXWwc1hh7u6R`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        )
    }

    return (
        <section id="depoiments_section" className={styles.depoiments_section}>
            <h2>Depoimentos</h2>
            <h3>GARANTIMOS OS MELHORES RESULTADOS AOS NOSSOS PACIENTES!</h3>
            <h4>Confira o depoimento de nossos pacientes, realizamos o tratamento mais moderno e funcional da atualidade, agende sua consulta para conhecer mais.</h4>
            <div className={styles.yt_container}>
                <RenderYTVid id_yt={"1DnSiznUrVI"} />
                <RenderYTVid id_yt={"1DnSiznUrVI"} />
            </div>
            <BtnSchedule />
        </section>
    )
}
