import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom";

function Layout() {
    return(
        <>
        <Navbar/>
        <main className="page-shell">
            <Outlet/>
        </main>
        </>
    )
}
export default Layout;
