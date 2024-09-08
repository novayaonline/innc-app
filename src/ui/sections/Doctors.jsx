import imgtemp from "../assets/img1-temp.png"
import styles from "./styles/doctors.module.css"
import { BtnSchedule } from "../components/BtnSchedule"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import { useState, useEffect } from "react"
import { fetchGetData } from "../../lib/fetchGetData"
const collectionName = "doctors"

export const Doctors = () => {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [docsData, setDocsData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetData(collectionName)
            setDocsData(data)
        }
        fetchData()
    }, [])

    // Função para navegar à esquerda
    function handlePrevClick() {
        setCurrentIdx((prevIdx) => (prevIdx === 0 ? docsData.length - 1 : prevIdx - 1))
    }

    // Função para navegar à direita
    function handleNextClick() {
        setCurrentIdx((prevIdx) => (prevIdx === docsData.length - 1 ? 0 : prevIdx + 1))
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
                    {docsData.map((item, index) => (
                        <div className={styles.item_container_doctors} key={index}>
                            <div className={styles.data_doc}>
                                <p className={styles.name}>{item.name}</p>
                                <p className={styles.especiality}><strong>{item.especiality}</strong></p>
                                <p className={styles.descrip}>{item.descrip}</p>
                                <div>
                                    <BtnSchedule />
                                </div>
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
                    {docsData.map((_, index) => (
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