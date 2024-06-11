import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";
import "./PostHeader.css";
import "../../../App.css"

const PostHeader = ({
  postUserImage,
  postName,
  postId,
  postUser,
  postContent,
  postImage,
  postDateTime,
}) => {
  const { auth } = useAuth();
  const { startDeletingPost } = useSocialStore();

  const handleDeleteClick = () => {
    const payload = {
      id: postId,
      nickname: postUser,
      content: postContent,
      urlImage: postImage,
      dateTime: postDateTime,
    };

    startDeletingPost(payload);
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
          <Typography id="name" className="post-header-item"> {postName}</Typography>
          <Typography className="post-header-item"> {postDateTime}</Typography>
          {postUser !== auth.user ? 
            <Button className="post-header-item" variant="text">
              Unfollow
            </Button> 
            : ""
          }
         
        </div>
        <Button onClick={handleDeleteClick}>
          {postUser === auth.user ? <DeleteIcon id="icon" /> : ""}
        </Button>
      </div>
    </div>
  );
};

export default PostHeader;
