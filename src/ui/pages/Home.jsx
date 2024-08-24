import React, {Suspense} from "react"
import { Hero } from "../sections/Hero"
/*import { About } from "../sections/About"
import { OurServices } from "../sections/OurServices"
import { Doctors } from "../sections/Doctors"
import { Products } from "../sections/Products"
import { Depoiments } from "../sections/Depoiments"
import { Articles } from "../sections/Articles"
import { Gallery } from "../sections/Gallery"
import { Gallery_2 } from "../sections/Gallery_2"*/

export const Home = () => {
    const About = React.lazy(() => import("../sections/About"))
    const OurServices = React.lazy(() => import("../sections/OurServices"))
    const Doctors = React.lazy(() => import("../sections/Doctors"))
    const Products = React.lazy(() => import("../sections/Products"))
    const Depoiments = React.lazy(() => import("../sections/Depoiments"))
    const Articles = React.lazy(() => import("../sections/Articles"))
    const Gallery = React.lazy(() => import("../sections/Gallery"))
    const Gallery_2 = React.lazy(() => import("../sections/Gallery_2"))

    return (
        <>
            <Hero />
            <Suspense fallback={<div>Carregando...</div>}>
                <About />
                <OurServices />
                <Doctors />
                <Products />
                <Gallery />
                <Articles />
                <Depoiments />
                <Gallery_2 />
            </Suspense>
            <div className="temp"></div>
        </>
    )
}
