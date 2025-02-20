import { Routes, Route } from "react-router-dom"
import NavbarC from "../components/NavbarC"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage"
import ResultPage from "../pages/ResultPage"
import ProductPage from "../pages/ProductPage"
import { UserPage } from "../pages/UserPage"
import FooterC from "../components/FooterC"
import AdminProductPage from "../pages/AdminProductPage"
import AdminUsersPage from "../pages/AdminUsersPage"
import CartPage from "../pages/CartPage"
import FavoritesPage from "../pages/FavoritesPage"
import PrivateRoute from "../components/PrivateRoute"
import SobreNosotrosPage from "../pages/SobreNostrosPage"

const RoutesViews = () => {
    return (
        <>
            <NavbarC />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/nosotros" element={<SobreNosotrosPage />} />
                <Route path="/user" element={
                    <PrivateRoute role='user'>
                        <UserPage />
                    </PrivateRoute>
                } />
                <Route path="/cart" element={
                    <PrivateRoute role='user'>
                        <CartPage />
                    </PrivateRoute>
                } />
                <Route path="/fav" element={
                    <PrivateRoute role='user'>
                        <FavoritesPage />
                    </PrivateRoute>
                } />
                <Route path="/usersAdmin" element={
                    <PrivateRoute role='admin'>
                        <AdminUsersPage />
                    </PrivateRoute>
                } />
                <Route path="/productsAdmin" element={
                    <PrivateRoute role='admin'>
                        <AdminProductPage />
                    </PrivateRoute>
                } />
                <Route path="/result/:res" element={<ResultPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <FooterC />
        </>
    )
}

export default RoutesViews
