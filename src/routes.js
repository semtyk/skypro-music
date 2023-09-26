import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage/mainpage";
import LoginPage from "./pages/loginpage/loginpage";
import SignupPage from "./pages/signuppage/signuppage";
import FavoritePage from "./pages/favoritepage/favoritepage";
import Category from "./pages/category/category";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/signin' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/favorites' element={<FavoritePage />} />
            <Route path='/category/:id' element={<Category />} />
        </Routes>

    );
}