import { Routes, Route } from "react-router-dom"
import NavbarC from "../components/NavbarC"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/contactPage"
import ResultPage from "../pages/ResultPage"
import ProductPage from "../pages/ProductPage"
import { UserPage } from "../pages/UserPage"
import FooterC from "../components/FooterC"
import AdminProductPage from "../pages/AdminProductPage"
import AdminUsersPage from "../pages/AdminUsersPage"
import AdminPage from "../pages/AdminPage"
import CartPage from "../pages/CartPage"
import FavoritesPage from "../pages/FavoritesPage"

const RoutesViews = () => {
    return (
        <>
            <NavbarC/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product/:id" element={<ProductPage/>}/>
                <Route path="/contacto" element={<ContactPage/>}/>
                <Route path="/user" element={<UserPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/fav" element={<FavoritesPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/usersAdmin" element={<AdminUsersPage/>}/>
                <Route path="/productsAdmin" element={<AdminProductPage/>}/>
                <Route path="/result/:res" element={<ResultPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <FooterC/>
        </>
    )
}

export default RoutesViews
