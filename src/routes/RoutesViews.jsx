import { Routes, Route } from "react-router-dom"
import NavbarC from "../components/NavbarC"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/contactPage"
import ResultPage from "../pages/ResultPage"

const RoutesViews = () => {
    return (
        <>
            <NavbarC/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/contacto" element={<ContactPage/>}/>
                <Route path="/result/:res" element={<ResultPage/>}/>
            </Routes>
        </>
    )
}

export default RoutesViews
