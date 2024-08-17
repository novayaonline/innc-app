import styles from "./styles/about.module.css"
import img from "../assets/about_img.webp"

export const About = () => {
    return (
        <section id="about" className={styles.about_section}>
            <div className={styles.about_data_container}>
                <div className={styles.about_data_box}>
                    <h2>Sobre nós</h2>
                    <p>Somos uma clínica de neurologia especializada no diagnóstico e tratamento de distúrbios do sistema nervoso, com equipe altamente qualificada.</p>
                    <h3>Nossos serviços</h3>
                    <div>
                        <span>i</span>
                        <p>Oferecemos cuidados de excelência para pacientes com epilepsia, esclerose múltipla, Parkinson, Alzheimer, enxaquecas, AVC, neuropatias e doenças musculares.</p>
                    </div>
                    <div>
                        <span>i</span>
                        <p>Utilizamos tecnologias avançadas para realizar exames clínicos detalhados e testes neurológicos precisos.</p>
                    </div>
                </div>
            </div>
            <img src={img} alt="Imagem" />            
        </section>
    )
}