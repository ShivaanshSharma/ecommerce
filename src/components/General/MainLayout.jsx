
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

export default function MainLayout() {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
        </>
    )
}