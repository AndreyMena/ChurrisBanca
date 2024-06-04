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
  const { sendNewLike, sendNewDislike, sendRemoveLike, sendRemoveDislike } = useSocialStore();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(Number(postLikes));
  const [disliked, setDisliked] = useState(false);
  const [dislikesCount, setDislikesCount] = useState(Number(postDislikes));

  useEffect(() => {
    if (postUsernamesLikes !== null) {
      const usernamesArray = postUsernamesLikes.split(',');
      if (usernamesArray.includes(auth.user)) {
        setLiked(true);
      }
    }
  }, [])
  
  const handleLike = () => {
    const payload = {
      userName: auth.user,
      postId: postId,
    };
    
    if (liked) {
      // setLikesCount(likesCount - 1);
      sendRemoveLike(payload);
      return setLiked(false);
    }

    if (disliked) {
      sendRemoveDislike(payload);
      setDisliked(false);
    }

    sendNewLike(payload);
    // setLikesCount(likesCount + 1);
    setLiked(true);
  };

  const handleDislike = () => {
    const payload = {
      userName: auth.user,
      postId: postId,
    };

    if (disliked) {
      // setLikesCount(dislikesCount - 1);
      sendRemoveDislike(payload);
      return setDisliked(false);
    }

    if (liked) {
      sendRemoveLike(payload);
      setLiked(false);
    }

    sendNewDislike(payload);
    // setDislikesCount(dislikesCount + 1);
    setDisliked(true);
  };

  return (
    <div id="post-reactions-container">
      <div className="reaction-item-container">
      <IconButton onClick={handleLike} color={liked ? "primary" : "default"}>
        <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
      </IconButton>
      <Typography>{postLikes}</Typography>
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
