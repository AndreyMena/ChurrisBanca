import React from "react";
import { useNavigate } from 'react-router-dom';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import IconButton from '@mui/material/IconButton';
import SearchEngine from "../Tags/SearchEngine";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleTransactionsClick = () => {
    navigate('/');
  }
  
  const handleSocialClick = () => {
    navigate('/socialPage');
  }

  const handleProfileClick = () => {
    navigate('/userProfile');
  } 

  return (
    <div id="header-container">
      <div id="logo-search-container">
        <Button size="large" variant="text" onClick={handleHomeClick} style={{ fontWeight: 'bold', fontSize: "20px"}}>Churris Banca</Button>
        <SearchEngine text="Buscar" id="search-engine" />
      </div>

      <div id="menu-container">
        <IconButton className="icon-button-header" color="primary" onClick={handleTransactionsClick}>
          <AccountBalanceOutlinedIcon fontSize="large"></AccountBalanceOutlinedIcon>
        </IconButton>

        <IconButton className="icon-button-header" color="primary" onClick={handleSocialClick}>
          <Diversity3OutlinedIcon fontSize="large"></Diversity3OutlinedIcon>
        </IconButton>

        <IconButton className="icon-button-header" color="primary" onClick={handleProfileClick}>
          <AccountCircleOutlinedIcon fontSize="large"></AccountCircleOutlinedIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
