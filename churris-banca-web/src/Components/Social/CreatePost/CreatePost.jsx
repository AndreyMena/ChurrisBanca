import React, { useState, useEffect } from "react";
import CreatePostPopUp from "../CreatePostPopUp/CreatePostPopUp";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";
import "./CreatePost.css";
import "../../../App.css"

const CreatePost = () => {
  const { auth } = useAuth();
  const { startLoadingAccount, account } = useSocialStore()
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    startLoadingAccount(auth.user)
  }, [])
  
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div id="create-post-container">
      <div className="create-post-item-container">
      <Box
        id="image-user-box"
        component="img"
        src={
          account.Imagen
            ? account.Imagen
            : "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
        }
      />
      </div>
      <div className="create-post-item-container">
        <TextField 
          className="custom-text-field" 
          placeholder="What's on your mind?" 
          variant="filled"
          onClick={handleOpenPopup} 
         />
      </div>

      <CreatePostPopUp
        openPopup={openPopup}
        handleClosePopup={handleClosePopup}>
      </CreatePostPopUp>
    </div>
  );
};

export default CreatePost;
