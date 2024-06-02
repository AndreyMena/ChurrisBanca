import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../../../hooks/useAuth";
import "./PostHeader.css";
import useSocialStore from "../../../hooks/useSocialStore";

const PostHeader = ({
  postUserImage,
  postName,
  postUser,
  postDateTime,
  postId,
}) => {
  const { auth } = useAuth();
  const { startDeletingPost } = useSocialStore();

  const handleDeleteClick = () => {
    startDeletingPost(postId);
  };

  return (
    <div id="post-header-container">
      <Box
        id="image-user-box"
        component="img"
        src={
          postUserImage
            ? postUserImage
            : "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
        }
      ></Box>
      <div id="container">
        <div id="info">
          <Typography className="post-header-item"> {postName}</Typography>
          <Typography className="post-header-item"> {postDateTime}</Typography>
          <Button className="post-header-item" variant="text">
            Unfollow
          </Button>
        </div>
        <Button onClick={handleDeleteClick}>
          {postUser === auth.user ? <DeleteIcon id="icon" /> : ""}
        </Button>
      </div>
    </div>
  );
};

export default PostHeader;
