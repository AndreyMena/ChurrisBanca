import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BankingPage from "./pages/BankingPage/BankingPage.jsx";
import SocialPage from "./pages/SocialPage/SocialPage.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BankingPage />} ></Route>
          <Route path="/socialPage" element={<SocialPage/>} ></Route>
          <Route path="/userProfile" element={<UserProfile/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
