import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import IconButton from '@mui/material/IconButton';
import SearchEngine from "../Tags/SearchEngine";
import AuthContext from "../../context/AuthProvider";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleHomeClick = () => {
    navigate('/bankingPage');
  }

  const handleTransactionsClick = () => {
    navigate('/bankingPage');
  }
  
  const handleSocialClick = () => {
    navigate('/socialPage');
  }

  const handleProfileClick = () => {
    navigate('/userProfile');
  } 

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/login');
  }

  return (
    <div id="header-container">
      <div id="logo-search-container">
        <Button size="large" variant="text" onClick={handleHomeClick} style={{ fontWeight: 'bold', fontSize: "30px"}}>Churris Banca</Button>
        {/* <SearchEngine text="Buscar" id="search-engine" /> */}
      </div>

      <div id="menu-container">
        <div className="icon-is-selected">
          <IconButton className="icon-button-header" color="primary" onClick={handleTransactionsClick}>
            <AccountBalanceOutlinedIcon fontSize="large"></AccountBalanceOutlinedIcon>
          </IconButton>
        </div>

        <div className="icon-is-selected">
          <IconButton className="icon-button-header" color="primary" onClick={handleSocialClick}>
            <Diversity3OutlinedIcon fontSize="large"></Diversity3OutlinedIcon>
          </IconButton>
        </div>
        
        <div className="icon-is-selected">
          <IconButton className="icon-button-header" color="primary" onClick={handleProfileClick}>
            <AccountCircleOutlinedIcon fontSize="large"></AccountCircleOutlinedIcon>
          </IconButton>
        </div>        
        
        <div className="icon-is-selected">
          <button onClick={logout}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
