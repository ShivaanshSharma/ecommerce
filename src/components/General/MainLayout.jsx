
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MainLayout() {
    return (
        <div className="wrapper">
            <span className="flex-1">
                <Header />
                <NavBar />
                <Outlet />
            </span>
            <Footer />
        </div>
    )
}