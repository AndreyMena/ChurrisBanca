import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import UserInformationField from "./UserInformationField/UserInformationField";
import useSocialStore from "../../hooks/useSocialStore";
import useAuth from "../../hooks/useAuth";
import "./Profile.css";

const Profile = () => {
  const { startLoadingAccount, account } = useSocialStore();
  const { auth } = useAuth();
  const { Nombre, Apellidos, Email, Celular, Imagen } = account;

  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    startLoadingAccount(auth.user);
  }, []);

  return (
    <div id="profile-container">
      <div id="big-profile-picture">
        <Box 
          id="img" 
          component="img"
          src={Imagen
            ? Imagen
            : "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
          }
        />
      </div>
 
      <Typography id="standard-read-only-input" variant="standard">
        {Nombre + " " + Apellidos}
      </Typography>

      <div id="user-information-container">
        <div className="user-specific-information-container">
          <EmailOutlinedIcon
            className="user-information-icons"
            fontSize="large"
            color="primary"
          />
          <UserInformationField
            id="email-text-field"
            label="Email"
            defaultValue={Email}
            onChange={setUserEmail}
          />
        </div>

        <div className="user-specific-information-container">
          <PasswordOutlinedIcon
            className="user-information-icons"
            fontSize="large"
            color="primary"
          />
          <UserInformationField
            id="password-text-field"
            label="Password"
            defaultValue={password}
            type="password"
            onChange={setPassword}
          />
        </div>

        <div className="user-specific-information-container">
          <PhoneAndroidOutlinedIcon
            className="user-information-icons"
            fontSize="large"
            color="primary"
          />
          <UserInformationField
            id="phone-number-text-field"
            label="Cell phone number"
            defaultValue={Celular}
            onChange={setUserPhoneNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
