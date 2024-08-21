import { Hero } from "../sections/Hero"
import { About } from "../sections/About"
import { OurServices } from "../sections/OurServices"
import { Doctors } from "../sections/Doctors"
import { Products } from "../sections/Products"

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <OurServices />
            <Doctors />
            <Products />
            <div className="temp"></div>
        </>
    )
}
