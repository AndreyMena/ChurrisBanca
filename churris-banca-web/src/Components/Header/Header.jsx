import React from "react";
import { useNavigate } from 'react-router-dom';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import IconButton from '@mui/material/IconButton';
import SearchEngine from "../Tags/SearchEngine";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleAccountBalanceClick = () => {
    navigate('/');
  }

  const handleSocialClick = () => {
    navigate('/socialPage');
  }

  const handleAccountClick = () => {
    navigate('/userProfile');
  }

  return (
    <div id="header-container">
      <div id="logo-search-container">
        <text>
          <b>Churris Banca</b>
        </text>
        <SearchEngine text="Buscar" id="search-engine" />
      </div>

      <div id="menu-container">
        <IconButton className="icon-button-header" color="primary" onClick={handleAccountBalanceClick}>
          <AccountBalanceOutlinedIcon></AccountBalanceOutlinedIcon>
        </IconButton>

        <IconButton className="icon-button-header" color="primary" onClick={handleSocialClick}>
          <Diversity3OutlinedIcon></Diversity3OutlinedIcon>
        </IconButton>

        <IconButton className="icon-button-header" color="primary" onClick={handleAccountClick}>
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
