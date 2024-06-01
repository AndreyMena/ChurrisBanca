import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./PostHeader.css";

const PostHeader = ({ postUserImage, postUser, postDateTime }) => {
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
      <Typography className="post-header-item"> {postUser}</Typography>
      <Typography className="post-header-item"> {postDateTime}</Typography>
      <Button className="post-header-item" variant="text">
        Unfollow
      </Button>
    </div>
  );
};

export default PostHeader;
