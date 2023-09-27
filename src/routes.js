import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage/mainpage";
import LoginPage from "./pages/loginpage/loginpage";
import SignupPage from "./pages/signuppage/signuppage";
import FavoritePage from "./pages/favoritepage/favoritepage";
import Category from "./pages/category/category";
import ProtectedRoute from "./protectroutes";
import NotFoundPage from "./pages/notfound/notfound";

export default function AppRoutes(props) {

    return (
        <Routes>
            
            <Route path='/signin' element={<LoginPage handleLogin={props.handleLogin}/>} />
            <Route path='/signup' element={<SignupPage />} />
            
            <Route element={<ProtectedRoute isAllowed={Boolean(props.user)} />}>
                <Route path='/' element={<MainPage handleLogout={props.handleLogout}/>} />
                <Route path='/favorites' element={<FavoritePage />} />
                <Route path='/category/:id' element={<Category />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>

    );
}