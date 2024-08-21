import imgtemp from "../assets/img1-temp.png"
import styles from "./styles/products.module.css"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import { useState } from "react"
import { BtnSchedule } from "../components/BtnSchedule"
import { FaClock } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

const data = [
    {
        name: "Dr. João Pereira",
        especiality: "Especialista em neurologia",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        especiality: "Especialista em neurologia",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        especiality: "Especialista em neurologia",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        especiality: "Especialista em neurologia",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, 
]

export const Products = () => {
    const [currentIdx, setCurrentIdx] = useState(0)

    // Função para navegar à esquerda
    function handlePrevClick() {
        setCurrentIdx((prevIdx) => (prevIdx === 0 ? data.length - 1 : prevIdx - 1))
    }

    // Função para navegar à direita
    function handleNextClick() {
        setCurrentIdx((prevIdx) => (prevIdx === data.length - 1 ? 0 : prevIdx + 1))
    }

    function handleIndicatorClick(index) {
        setCurrentIdx(index)
    }

    return (
        <section id="doctors_section" className={styles.products_section}>
            <h2>Produtos</h2>
            <div className={styles.products_container}>
                <div
                    className={styles.slider_wrapper}
                    style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                >
                    {data.map((item, index) => (
                        <div className={styles.item_container_doctors} key={index}>
                            <div className={styles.img_container}>    
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className={styles.data_container}>
                                <p className={styles.name}>{item.name}</p>
                                <p className={styles.especiality}><strong>{item.especiality}</strong></p>
                                <p className={styles.descrip}>{item.descrip}</p>
                                <div className={styles.btns_product}> 
                                    <div> 
                                        <FaClock /> 
                                        <p>Rápido e eficaz</p>
                                    </div>
                                    <div> 
                                        <IoLogoWhatsapp /> 
                                        <p>Agende sua avaliação</p>
                                    </div>
                                </div>
                                <BtnSchedule />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.btn_container}>
                <button onClick={handlePrevClick}>
                    <IoIosArrowDropleft />
                </button>
                <div className={styles.indicators_container}>
                    {data.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${currentIdx === index ? styles.active : ""}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
                <button onClick={handleNextClick}>
                    <IoIosArrowDropright />
                </button>
            </div>
        </section>
    )
}
