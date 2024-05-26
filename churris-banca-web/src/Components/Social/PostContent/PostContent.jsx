import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./PostContent.css";

const PostContent = ({ postContent, postImage }) => {
  // TODO: Borrar este código y cambiarlo por el comentado cuando la conexión React-Node-MariaDB funcione.
  return (
    <div id="post-content-container">
      <Typography id="text">Content of post.</Typography>
      <Box
        id="image-box"
        component="img"
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
      ></Box>

      {/* <Typography>{postContent}</Typography>
      <Box id="image-box" component="img" src={postImage}></Box> */}
    </div>
  );
};

export default PostContent;
