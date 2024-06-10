import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import CreatePostPopUp from "../CreatePostPopUp/CreatePostPopUp";
import SearchUserPopup from "../SearchUserPopup/SearchUserPopup";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";

import "./CreatePost.css";
import "../../../App.css"

const CreatePost = () => {
  const { auth } = useAuth();
  const [openCreatePostPopup, setOpenCreatePostPopup] = useState(false);
  const [openSearchUserPopup, setOpenSearchUserPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState("Select user");
  const { startLoadingAccount, account } = useSocialStore();

  useEffect(() => {
    startLoadingAccount(auth.user)
  }, [])
  
  const handleOpenCreatePostPopup = () => {
    setOpenCreatePostPopup(true);
  };

  const handleCloseCreatePostPopup = () => {
    setOpenCreatePostPopup(false);
  };

  const handleOpenSearchUserPopup = () => {
    setOpenSearchUserPopup(true);
  };

  const handleCloseSearchUserPopup = () => {
    setOpenSearchUserPopup(false);
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
          onClick={handleOpenCreatePostPopup} 
         />
      </div>
      <div>
        <Button variant="outlined" onClick={handleOpenSearchUserPopup}>
          Who are you looking for?
        </Button>
      </div>

      <CreatePostPopUp
        openPopup={openCreatePostPopup}
        handleClosePopup={handleCloseCreatePostPopup}>
      </CreatePostPopUp>
      
      <SearchUserPopup
        openPopup={openSearchUserPopup}
        handleClosePopup={handleCloseSearchUserPopup}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}>
      </SearchUserPopup>
    </div>
  );
};

export default CreatePost;
