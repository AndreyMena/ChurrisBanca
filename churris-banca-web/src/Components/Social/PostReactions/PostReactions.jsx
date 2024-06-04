import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Typography from "@mui/material/Typography";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";

import "./PostReactions.css"

const PostReaction = ({postId, postLikes, postUsernamesLikes, postDislikes}) => {
  const { auth } = useAuth();
  const { sendNewLike, sendNewDislike } = useSocialStore();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(Number(postLikes));
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    if (postUsernamesLikes !== null) {
      const usernamesArray = postUsernamesLikes.split(',');
      if (usernamesArray.includes(auth.user)) {
        setLiked(true);
      }
    }
  }, [])
  
  const handleLike = () => {
    if (liked) {
      // TODO: Eliminar el like del backend
      setLikesCount(likesCount - 1);
      return setLiked(false);
    }

    const payload = {
      userName: auth.user,
      postId: postId,
    };

    sendNewLike(payload);

    setLikesCount(likesCount + 1);
    setLiked(true);

    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    sendNewDislike(auth.user, postId);
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  return (
    <div id="post-reactions-container">
      <div className="reaction-item-container">
      <IconButton onClick={handleLike} color={liked ? "primary" : "default"}>
        <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
      </IconButton>
      <Typography>{likesCount}</Typography>
      </div>
      <div className="reaction-item-container">
      <IconButton onClick={handleDislike} color={disliked ? "primary" : "default"}>
        <ThumbDownOutlinedIcon></ThumbDownOutlinedIcon>
      </IconButton>
      <Typography>{postDislikes}</Typography>
      </div>
    </div>
  );
};

export default PostReaction;
