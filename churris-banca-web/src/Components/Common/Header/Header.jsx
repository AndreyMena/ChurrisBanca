import React from "react";
import { useNavigate } from "react-router-dom";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import IconButton from "@mui/material/IconButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import useLogout from "../../../hooks/useLogout";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { activePage, setActivePage } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const handleTransactionsClick = () => {
    setActivePage("banking");
    navigate("/bankingPage");
  };

  const handleSocialClick = () => {
    setActivePage("social");
    navigate("/socialPage");
  };

  const handleProfileClick = () => {
    setActivePage("profile");
    navigate("/userProfile");
  };

  const signOut = async () => {
    setActivePage("social");
    await logout();
    navigate("/login");
  };

  return (
    <div id="header-container">
      <div id="logo-search-container">
        <Button
          size="large"
          variant="text"
          onClick={handleSocialClick}
          style={{ fontWeight: "bold", fontSize: "30px" }}
        >
          Churris Banca
        </Button>
      </div>

      <div id="menu-container">
        <div
          className={`icons ${activePage === "social" ? "icon-active" : ""}`}
        >
          <IconButton
            className="icon-button-header"
            color="primary"
            onClick={handleSocialClick}
          >
            <Diversity3OutlinedIcon fontSize="large"></Diversity3OutlinedIcon>
          </IconButton>
        </div>

        <div
          className={`icons ${activePage === "banking" ? "icon-active" : ""}`}
        >
          <IconButton
            className="icon-button-header"
            color="primary"
            onClick={handleTransactionsClick}
          >
            <AccountBalanceOutlinedIcon fontSize="large"></AccountBalanceOutlinedIcon>
          </IconButton>
        </div>

        <div
          className={`icons ${activePage === "profile" ? "icon-active" : ""}`}
        >
          <IconButton
            className="icon-button-header"
            color="primary"
            onClick={handleProfileClick}
          >
            <AccountCircleOutlinedIcon fontSize="large"></AccountCircleOutlinedIcon>
          </IconButton>
        </div>

        <div className="icons">
          <IconButton
            className="icon-button-header"
            color="primary"
            onClick={signOut}
          >
            <LogoutOutlinedIcon fontSize="large"></LogoutOutlinedIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
