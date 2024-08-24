import styles from "./styles/gallery.module.css"
import img1 from "../assets/14.png"
import img2 from "../assets/15.png"
import img3 from "../assets/16.png"
import { useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const data = [
    {
        img: img1
    }, {
        img: img2
    }, {
        img: img3
    }, {
        img: img1
    }, {
        img: img2
    }, {
        img: img3
    }
]

const Gallery = () => {
    const [currentIdx, setCurrentIdx] = useState(0)
    const itemsPerPage = 3 // Quantidade de itens por página
    const totalPages = Math.ceil(data.length / itemsPerPage) // Total de páginas

    // Função para navegar à esquerda
    function handlePrevClick() {
        setCurrentIdx((prevIdx) => (prevIdx === 0 ? totalPages - 1 : prevIdx - 1))
    }

    // Função para navegar à direita
    function handleNextClick() {
        setCurrentIdx((prevIdx) => (prevIdx === totalPages - 1 ? 0 : prevIdx + 1))
    }

    return (
        <section id="gallery_section" className={styles.gallery_section}>
            <h2>“Nosso objetivo é proporcionar um atendimento abrangente e personalizado, colaborando com outros especialistas para garantir o melhor cuidado possível aos nossos pacientes.”</h2>
            <div className={styles.div_btns}>
                <div className={styles.gallery_container}>
                    <div
                        className={styles.slider_wrapper}
                        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                    >
                        {data.map((item, index) => (
                            <img src={item.img} key={index} alt="Imagem" />
                        ))}
                    </div>

                </div>
                <button className={styles.btn_right} onClick={handleNextClick}>
                    <MdKeyboardArrowRight />
                </button>
                <button className={styles.btn_left} onClick={handlePrevClick}>
                    <MdKeyboardArrowLeft />
                </button>
            </div>
        </section>
    )
}

export default Gallery