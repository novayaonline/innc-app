import { Hero } from "../sections/Hero"
import { About } from "../sections/About"
import { OurServices } from "../sections/OurServices"
import { Doctors } from "../sections/Doctors"
import { Products } from "../sections/Products"
import { Depoiments } from "../sections/Depoiments"
import { Articles } from "../sections/Articles"
import { Gallery } from "../sections/Gallery"
import { Gallery_2 } from "../sections/Gallery_2"

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <OurServices />
            <Doctors />
            <Products />
            <Gallery />
            <Articles />
            <Depoiments />
            <Gallery_2 />
            <div className="temp"></div>
        </>
    )
}
