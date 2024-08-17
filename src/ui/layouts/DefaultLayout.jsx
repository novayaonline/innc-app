import { Outlet } from "react-router-dom"

//Components
import { Navbar } from "../components/Navbar"

export function DefaultLayout() {
    return (
        <>      
            <Navbar />
            <Outlet />
        </>
    )
}
