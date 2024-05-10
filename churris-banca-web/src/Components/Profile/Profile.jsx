import React from "react";
import { CgProfile } from "react-icons/cg";
// import { CiCircleInfo } from "react-icons/ci";
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';

import "./Profile.css";

import UserInformationField from "../UserInformationField/UserInformationField";

const Profile = () => {
  return (
    <div id="profile-container">
      <div id="big-profile-picture">
        <CgProfile id="img" />
      </div>
      <TextField
          id="standard-read-only-input"
          defaultValue="Fullname"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />

      <div id="user-information-container">
        <div className="user-specific-information-container">
          <PersonOutlineOutlinedIcon className="user-information-icons" fontSize="large" />
          <UserInformationField id="username-text-field" label="Username"></UserInformationField>
        </div>

        <div className="user-specific-information-container">
          <PasswordOutlinedIcon className="user-information-icons" fontSize="large" />
          <UserInformationField id="password-text-field" label="Password"></UserInformationField>
        </div>

        <div className="user-specific-information-container">
          <EmailOutlinedIcon className="user-information-icons" fontSize="large" />
          <UserInformationField id="email-text-field" label="Email"></UserInformationField>
        </div>

        <div className="user-specific-information-container">
          <PhoneAndroidOutlinedIcon className="user-information-icons" fontSize="large" />
          <UserInformationField id="phone-number-text-field" label="Cell phone number"></UserInformationField>
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
