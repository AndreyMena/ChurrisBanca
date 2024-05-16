import "./App.css";
import { Route, Routes } from 'react-router-dom';
import BankingPage from "./pages/BankingPage/BankingPage.jsx";
import Login from "./Components/Login/Login.jsx";
import SocialPage from "./pages/SocialPage/SocialPage.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import RequireAuth from "./Components/Auth/RequireAuth.js";
import Missing from "./Components/Auth/Missing.js";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} ></Route>

            {/*Eliminar esto y dejar las de abajo para que haya q estar logeado*/}
            <Route path="/bankingPage" element={<BankingPage />} ></Route>
            <Route path="/socialPage" element={<SocialPage/>} ></Route>
            <Route path="/userProfile" element={<UserProfile/>} ></Route>


            {/*Las rutas que coloquen dentro de esto requeriran estar logeado*/}
            <Route element={<RequireAuth />}>
              <Route path="/" />
              <Route path="/bankingPage" element={<BankingPage />} ></Route>
              <Route path="/socialPage" element={<SocialPage/>} ></Route>
              <Route path="/userProfile" element={<UserProfile/>} ></Route>
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
