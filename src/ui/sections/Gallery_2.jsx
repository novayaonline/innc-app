import styles from "./styles/gallery2.module.css"
import img1 from "../assets/14.png"
import img2 from "../assets/15.png"
import img3 from "../assets/16.png"

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

export const Gallery_2 = () => {
    return (
        <section className={styles.gallery_2_section}>
            {data.map((item, index) => (
                <img src={item.img} key={index} alt="Imagem" />
            ))}
        </section>
    )
}