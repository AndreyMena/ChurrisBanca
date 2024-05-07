import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiCircleInfo } from "react-icons/ci";
import "./Profile.css";

const Profile = () => {
  return (
    <div id="profile">
      <div id="big-profile-picture">
        <CgProfile id="img" />
      </div>
      <text>User 5</text>
      <div id="information">
        <div className="specific-information">
          <CiMail />
          <text className="text">user5@gmail.com</text>
        </div>

        <div className="specific-information">
          <IoCallOutline />
          <text className="text">12-34-56-78</text>
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
