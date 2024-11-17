import styles from "./styles/articles.module.css"
import imgtemp from "../assets/img1-temp.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"

const data = [
    {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }, {
        name: "Dr. João Pereira",
        descrip: "Dr. João Pereira é neurologista adulto e infantil, diretor do Instituto de Neurociência do ES. Com milhares de atendimentos ao longo de mais de 20 anos de experiência.",
        img: imgtemp
    }
]

const Articles = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const itemsPerPage = 3; // Quantidade de itens por página
    const totalPages = Math.ceil(data.length / itemsPerPage); // Total de páginas

    // Função para navegar à esquerda
    function handlePrevClick() {
        setCurrentIdx((prevIdx) => (prevIdx === 0 ? totalPages - 1 : prevIdx - 1));
    }

    // Função para navegar à direita
    function handleNextClick() {
        setCurrentIdx((prevIdx) => (prevIdx === totalPages - 1 ? 0 : prevIdx + 1));
    }

    function handleIndicatorClick(index) {
        setCurrentIdx(index);
    }

    return (
        <section id="artigos" className={styles.articles_section}>
            <h2> Artigos </h2>
            <div className={styles.articles_container}>
                <div 
                    className={styles.slider_wrapper}
                    style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                >
                    {data.map((item) => (
                        <div key={item.name} className={styles.article_item}>
                            <img src={item.img} />
                            <p className={styles.title}><strong> {item.name} </strong></p>
                            <p>{item.descrip}</p>
                            <div>
                                <Link>Ler Artigo</Link>
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
                    {Array.from({ length: totalPages }, (_, index) => (
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

export default Articles