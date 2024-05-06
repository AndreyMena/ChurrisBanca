import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import "./Posts.css";

const Posts = () => {
  return (
    <div id="posts">
      <div id="head">
        <div id="data">
          <div className="profile-picture">
            <CgProfile />
          </div>
          <div id="name-hour">
            <div id="name">
              <text>User 1</text>
              <GoDotFill id="icon-small" />
              <text id="smaller-text">Unfollow</text>
            </div>
            <text id="hour">1 h</text>
          </div>
        </div>

        <div id="three-dots">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Posts;
