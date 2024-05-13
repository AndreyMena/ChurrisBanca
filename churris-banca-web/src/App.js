import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BankingPage from "./pages/BankingPage/BankingPage.jsx";
import Login from "./Components/Login/Login.jsx";
import SocialPage from "./pages/SocialPage/SocialPage.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} ></Route>
          <Route path="/bankingPage" element={<BankingPage />} ></Route>
          <Route path="/socialPage" element={<SocialPage/>} ></Route>
          <Route path="/userProfile" element={<UserProfile/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}
//<UserProfile />
//<Login />

export default App;
