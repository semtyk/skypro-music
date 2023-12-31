import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainpage/mainpage'
import LoginPage from './pages/loginpage/loginpage'
import SignupPage from './pages/signuppage/signuppage'
import FavoritePage from './pages/favoritepage/favoritepage'
import Category from './pages/category/category'
import ProtectedRoute from './protectroutes'
import NotFoundPage from './pages/notfound/notfound'

export default function AppRoutes({
  handleLogin,
  user,
  handleLogout,
  tracks,
  isTracksLoading,
  LoadTracksError,
  selection,
  LoadSelectionError,
}) {
  return (
    <Routes>
      <Route path="/signin" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/"
          element={
            <MainPage
              handleLogout={handleLogout}
              tracks={tracks}
              isTracksLoading={isTracksLoading}
              LoadTracksError={LoadTracksError}
              selection={selection}
              LoadSelectionError={LoadSelectionError}
            />
          }
        />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route
          path="/category/:id"
          element={<Category selection={selection} />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
