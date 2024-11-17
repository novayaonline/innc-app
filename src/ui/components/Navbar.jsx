//css
import styles from "./styles/navbar.module.css"

//Assets
import logoInnc from "../assets/logo_completa.webp"

//Libs
import { Link } from "react-router-dom"

//Imports
import { scrollToSec } from "../../lib/scrollToSec"

const navItems = [
    {title: "Sobre", link: "sobre"},
    {title: "Serviços", link: "servicos"},
    {title: "Produtos", link: "produtos"},
    {title: "Artigos", link: "artigos"},
    {title: "Contato", link: "contato"},
]

export const Navbar = () => {

    const RenderNavItems = () => {
        const RenderNavItem = ({navItem}) => {
            return (
                <a key={navItem.title} href={`#${navItem.link}`}
                    onClick={(e) => scrollToSec(e)}
                >
                    {navItem.title}
                </a>
            )
        }

        return (
            <> {navItems.map((navItem) => ( <RenderNavItem key={navItem.title} navItem={navItem} /> ))} </>
        )
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.navbar_container}>
                <Link to={"/"}>
                    <img src={logoInnc} alt="Logo INNC" />
                </Link>
                <div className={styles.nav_items}>
                    <RenderNavItems />
                </div>
            </div>
        </nav>
    )
}
