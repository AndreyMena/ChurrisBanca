import React from "react";
import IconButton from "@mui/material/IconButton";
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Typography from "@mui/material/Typography";

import "./PostReactions.css"

const PostReaction = () => {

  return (
    <div id="post-reactions-container">
      <div className="reaction-item-container">
      <IconButton>
        <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
      </IconButton>
      <Typography>500</Typography>
      </div>
      <div className="reaction-item-container">
      <IconButton>
        <ThumbDownOutlinedIcon></ThumbDownOutlinedIcon>
      </IconButton>
      <Typography>500</Typography>
      </div>
    </div>
  );
};

export default PostReaction;
