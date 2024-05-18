import React, { useContext, useEffect, useState } from "react";
import { clientServerContext } from "../../context/ClientServerContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import TextField from '@mui/material/TextField';
import UserInformationField from "../UserInformationField/UserInformationField";

import "./Profile.css";
 
// Elimminar despues
const data = {
  fullName: "Pablo Rodriguez Jimenez",
  email: "pablo@gmail.com",
  password: "Casa123!",
  cellphoneNumber: "12345678"
}

const Profile = () => {
  const { sendMessageToServer } = useContext(clientServerContext);

  const [fullName, setFullName] = useState(data.fullName);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [cellphoneNumber, setCellphoneNumber] = useState(data.cellphoneNumber);


  const messageToServer = {
    type: "getUserInformation",
    user: "userName",
    password: "password"
  };

  useEffect(() => {
    const serverResponse = sendMessageToServer(messageToServer);
    if (serverResponse != null) {
      setFullName(serverResponse.fullName);
      setEmail(serverResponse.email);
      setPassword(serverResponse.password);
      setCellphoneNumber(serverResponse.cellphoneNumber);
    }
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
          <UserInformationField id="email-text-field" label="Email" defaultValue={data.email} onChange={setEmail}/>
        </div>

        <div className="user-specific-information-container">
          <PasswordOutlinedIcon className="user-information-icons" fontSize="large" color="primary" />
          <UserInformationField id="password-text-field" label="Password" defaultValue={data.password} type="password" onChange={setPassword}/>
        </div>

        <div className="user-specific-information-container">
          <PhoneAndroidOutlinedIcon className="user-information-icons" fontSize="large" color="primary" />
          <UserInformationField id="phone-number-text-field" label="Cell phone number" defaultValue={data.cellphoneNumber} onChange={setCellphoneNumber}/>
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
