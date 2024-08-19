import { Hero } from "../sections/Hero"
import { About } from "../sections/About"
import { OurServices } from "../sections/OurServices"

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <OurServices />

            <div className="temp"></div>
        </>
    )
}
