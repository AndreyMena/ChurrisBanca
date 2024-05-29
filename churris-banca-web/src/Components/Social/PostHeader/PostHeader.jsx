import React from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";

import "./PostHeader.css"

const PostHeader = ({postUserImage, postUser}) => {
  return (
    <div id="post-header-container">      
      <Box id="image-user-box" component="img" src={postUserImage}></Box>
      <Typography> {postUser}</Typography>
      <Button variant="text">Unfollow</Button>
    </div>
  );
};

export default PostHeader;
