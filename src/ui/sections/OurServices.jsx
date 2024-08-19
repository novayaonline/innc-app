import styles from "./styles/ourservices.module.css"
import img1 from "../assets/logo_cinza.webp"
import img from "../assets/1.webp"
import img2 from "../assets/2.webp"
import img3 from "../assets/3.webp"
import img4 from "../assets/4.webp"
import bg from "../assets/bg_services.webp"
import { Link } from "react-router-dom"

const data = {
    item1: {
        img: img,
        title: "Consultas Neurológicas",
        descrip: "Abordagens Modernas no Tratamento ",
        link: "consultas-neurológicas"
    },
    item2: {
        img: img4,
        title: "Consultas Neurológicas",
        descrip: "Abordagens Modernas no Tratamento ",
        link: "consultas-neurológicas"
    },
    item3: {
        img: img3,
        title: "Consultas Neurológicas",
        descrip: "Abordagens Modernas no Tratamento ",
        link: "consultas-neurológicas"
    },
    item4: {
        img: img2,
        title: "Consultas Neurológicas",
        descrip: "Abordagens Modernas no Tratamento ",
        link: "consultas-neurológicas"
    }
}

export const OurServices = () => {

    const RenderCardServices = ({item}) => {
        return (
            <div className={styles.card_services}>
                <img src={item.img} alt="icone"/>
                <p className={styles.title}><strong>{item.title}</strong></p>
                <p>{item.descrip}</p>
                <Link to={item.link}>Saiba mais</Link>
            </div>
        )
    }

    return (
        <section id="our_services" className={styles.our_services_section}>
            <h2> Nossos Serviços </h2>
            <div className={styles.container_itens1}>
                <RenderCardServices item={data.item1} />
                <RenderCardServices item={data.item2} />
            </div>
            <div className={styles.container_itens2}>
                <RenderCardServices item={data.item3} />
                <RenderCardServices item={data.item4} />
            </div>
            <img className={styles.img_bg} src={bg} alt="Logo" />
            <img className={styles.img_bg1} src={img1} alt="Logo" />
            <img className={styles.img_bg2} src={img1} alt="Logo" />
        </section>
    )
}
