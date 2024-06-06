import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./PostContent.css";

const PostContent = ({ postContent, postImage }) => {
  return (
    <div id="post-content-container">
      <Typography id="text">{postContent}</Typography>
      {postImage ? <Box
        id="image-box"
        component="img"
        src={postImage}
       /> : ""}
    </div>
  );
};

export default PostContent;
