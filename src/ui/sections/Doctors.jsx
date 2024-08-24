import imgtemp from "../assets/img1-temp.png"
import styles from "./styles/doctors.module.css"
import { BtnSchedule } from "../components/BtnSchedule"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import { useState } from "react"

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
    }, {
        name: "Dr. João Pereira",
        especiality: "Especialista em neurologia",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }
]

export const Doctors = () => {
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
        <section id="doctors_section" className={styles.doctors_section}>
            <div className={styles.doctors_container}>
                <div
                    className={styles.slider_wrapper}
                    style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                >
                    {data.map((item, index) => (
                        <div className={styles.item_container_doctors} key={index}>
                            <div className={styles.data_doc}>
                                <p className={styles.name}>{item.name}</p>
                                <p className={styles.especiality}><strong>{item.especiality}</strong></p>
                                <p className={styles.descrip}>{item.descrip}</p>
                                <BtnSchedule />
                            </div>
                            <img src={item.img} alt={item.name} />
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

export default Doctors