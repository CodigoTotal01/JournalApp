import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from '../pages'

//Rutas de Auth
export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* Ruta de redireccion por defecto  */}
            <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </Routes>

    )
}
