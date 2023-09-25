import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage/mainpage";
import LoginPage from "./pages/loginpage/loginpage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/signin' element={<LoginPage />} />
        </Routes>

    );
}