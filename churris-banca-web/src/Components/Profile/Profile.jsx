import React, { useContext, useEffect } from "react";
import { clientServerContext } from "../../context/ClientServerContext";
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import UserInformationField from "../UserInformationField/UserInformationField";

import "./Profile.css";
 
export const handleUserInformation = (messageFromServer) => {

}

// Elimminar despues
const data = {
  fullName: "Pablo Rodriguez Jimenez",
  email: "pablo@gmail.com",
  password: "Casa123!",
  cellphoneNumber: "12345678"
}

const Profile = () => {
  const { sendMessageToServer } = useContext(clientServerContext);

  const messageToServer = {
    type: "getUserInformation",
    user: "userName",
    password: "password"
  };

  useEffect(() => {
    const serverResponse = sendMessageToServer(messageToServer);
  }, []);

  return (
    <div id="profile-container">
      <div id="big-profile-picture">
        <AccountCircleIcon id="img" />
      </div>
      <TextField
          id="standard-read-only-input"
          defaultValue={data.fullName}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />

      <div id="user-information-container">
        <div className="user-specific-information-container">
          <EmailOutlinedIcon className="user-information-icons" fontSize="large" color="primary" />
          <UserInformationField id="email-text-field" label="Email" defaultValue={data.email}/>
        </div>

        <div className="user-specific-information-container">
          <PasswordOutlinedIcon className="user-information-icons" fontSize="large" color="primary" />
          <UserInformationField id="password-text-field" label="Password" defaultValue={data.password} type="password"/>
        </div>

        <div className="user-specific-information-container">
          <PhoneAndroidOutlinedIcon className="user-information-icons" fontSize="large" color="primary" />
          <UserInformationField id="phone-number-text-field" label="Cell phone number" defaultValue={data.cellphoneNumber}/>
        </div>

        {/* <div className="user-specific-information">
          <CiCircleInfo />
          <text className="text">Extra info</text>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
