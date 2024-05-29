import React from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";

import "./PostHeader.css"

const PostHeader = ({postUserImage, postUser}) => {
  // TODO: Borrar este código y cambiarlo por el comentado cuando la conexión React-Node-MariaDB funcione.
  return (
    <div id="post-header-container">      
      <Box id="image-user-box" component="img" src={postUserImage}></Box>
      <Typography> {postUser}</Typography>
      
      {/* <Box id="image-user-box" component="img" src={postUserImage}></Box>
      <Typography>{postUser}</Typography> */}

      <Button variant="text">Unfollow</Button>
    </div>
  );
};

export default PostHeader;
