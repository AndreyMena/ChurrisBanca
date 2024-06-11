import "./App.css";
import { Route, Routes, Navigate  } from 'react-router-dom';
import BankingPage from "./pages/BankingPage/BankingPage.jsx";
import Login from "./Components/Login/Login.jsx";
import SocialPage from "./pages/SocialPage/SocialPage.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import RequireAuth from "./Components/Auth/RequireAuth.js";
import Missing from "./Components/Auth/Missing.js";
import { AuthProvider } from "./context/AuthProvider";
import PersistLogin from "./Components/Auth/PersistLogin.js";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} ></Route>


            <Route element={<PersistLogin />}>
              {/*Las rutas que coloquen dentro de esto requeriran estar logeado*/}
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Navigate to="/socialPage" />}/>
                <Route path="/bankingPage" element={<BankingPage />} ></Route>
                <Route path="/socialPage" element={<SocialPage/>} ></Route>
                <Route path="/userProfile" element={<UserProfile/>} ></Route>
              </Route>
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>

      </AuthProvider>
    </div>
  );
}

export default App;
