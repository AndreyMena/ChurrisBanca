import React from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";

import "./PostHeader.css"

const PostHeader = ({postUserImage, postUser, postDateTime}) => {
  return (
    <div id="post-header-container">      
      <Box className="post-header-item" id="image-user-box" component="img" src={postUserImage}></Box>
      <Typography className="post-header-item"> {postUser}</Typography>
      <Typography className="post-header-item"> {postDateTime}</Typography>
      <Button className="post-header-item" variant="text">Unfollow</Button>
    </div>
  );
};

export default PostHeader;
