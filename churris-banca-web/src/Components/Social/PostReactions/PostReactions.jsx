import React from "react";
import IconButton from "@mui/material/IconButton";
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Typography from "@mui/material/Typography";

import "./PostReactions.css"

const PostReaction = ({postId, postLikes, postDislikes}) => {
  return (
    <div id="post-reactions-container">
      <div className="reaction-item-container">
      <IconButton>
        <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
      </IconButton>
      <Typography>{postLikes}</Typography>
      </div>
      <div className="reaction-item-container">
      <IconButton>
        <ThumbDownOutlinedIcon></ThumbDownOutlinedIcon>
      </IconButton>
      <Typography>{postDislikes}</Typography>
      </div>
    </div>
  );
};

export default PostReaction;
