import { Outlet } from "react-router-dom"

//El Outlet se encarga de agregar lo que este aqui a todos los children del Layout
//Puede ser util para poner header o footers aqui
const Layout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    )
}

export default Layout