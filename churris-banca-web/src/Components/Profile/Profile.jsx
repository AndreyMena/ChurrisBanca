import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiMail, CiCircleInfo } from "react-icons/ci";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';

import "./Profile.css";

const onCLickHandle = () => {

}

const Profile = () => {
  return (
    <div id="profile">
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
      <div id="information">
        <div className="specific-information">
          <PersonOutlineOutlinedIcon className="user-information-icons" fontSize="large" />
          <TextField disabled id="username-text-field" label="Username"  variant="standard" />
          <IconButton>
            <EditIcon color="action" />
          </IconButton>
        </div>

        <div className="specific-information">
          <PasswordOutlinedIcon className="user-information-icons" fontSize="large" />
          <TextField disabled id="password-text-field" label="Password" variant="standard" />
          <IconButton>
            <EditIcon color="action"/>
          </IconButton>
        </div>

        <div className="specific-information">
          <EmailOutlinedIcon className="user-information-icons" fontSize="large" />
          <TextField disabled id="email-text-field" label="Email" variant="standard" />
          <IconButton>
            <EditIcon color="action"/>
          </IconButton>
        </div>

        <div className="specific-information">
          <PhoneAndroidOutlinedIcon className="user-information-icons" fontSize="large" />
          <TextField disabled id="phone-number-text-field" label="Cell phone number" variant="standard" />
          <IconButton>
            <EditIcon color="action"/>
          </IconButton>
        </div>

        <div className="specific-information">
          <CiCircleInfo />
          <text className="text">Extra info</text>
        </div>
      </div>
    </div>
  );
};

export default Profile;
