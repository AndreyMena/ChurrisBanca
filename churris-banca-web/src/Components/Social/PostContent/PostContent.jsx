import React from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";

import "./PostContent.css"

const PostContent = () => {

    return (
      <div id="post-content-container">
        <Typography>Content of post.</Typography>
        <Box id="image-box" component="img" src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"></Box>
      </div>
    );
  };
  
  export default PostContent;
  