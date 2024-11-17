import { BtnSchedule } from "../components/BtnSchedule"
import styles from "./styles/depoiments_section.module.css"

export const Depoiments = () => {

    const RenderYTVideo = ({videoId}) => {
        return (
            <iframe width="440" height="290" src={`https://www.youtube.com/embed/${videoId}?si=jPIrF8hF04pTNdoV`} 
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            >    
            </iframe>
        )
    }

    return(
        <section id = "depoimentos" className = { styles.depoiments_section } >
            <h2>Depoimentos</h2>
            <h3>GARANTIMOS OS MELHORES RESULTADOS AOS NOSSOS PACIENTES!</h3>
            <h4>Confira o depoimento de nossos pacientes, realizamos o tratamento mais moderno e funcional da atualidade, agende sua consulta para conhecer mais.</h4>
            <div className={styles.yt_container}>
                <RenderYTVideo videoId="1DnSiznUrVI" />
                <RenderYTVideo videoId="1DnSiznUrVI" />                
            </div>
            <BtnSchedule />
        </section >
    )
}

export default Depoiments