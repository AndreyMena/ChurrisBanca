import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../../../hooks/useAuth";
import "./PostHeader.css";

const PostHeader = ({ postUserImage, postName, postUser, postDateTime }) => {
  const { auth } = useAuth();

  return (
    <div id="post-header-container">
      <Box
        id="image-user-box"
        component="img"
        src={
          postUserImage
            ? postUserImage
            : "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
        }
      ></Box>
      <div id="container">
        <div id="info">
          <Typography className="post-header-item"> {postName}</Typography>
          <Typography className="post-header-item"> {postDateTime}</Typography>
          <Button className="post-header-item" variant="text">
            Unfollow
          </Button>
        </div>
        {postUser === auth.user ? <DeleteIcon id="icon" /> : ""}
      </div>
    </div>
  );
};

export default PostHeader;
