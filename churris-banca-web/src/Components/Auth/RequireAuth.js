import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//Componente encargado de redirigir al login si requiere autorizacion
//Osea se vencio su login y del todo no se ha logeado
const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;