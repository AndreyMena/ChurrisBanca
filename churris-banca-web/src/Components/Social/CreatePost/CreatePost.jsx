import React, { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreatePostPopUp from "../CreatePostPopUp/CreatePostPopUp";
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import TextField from "@mui/material/TextField";

import "./CreatePost.css";

const CreatePost = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div id="create-post-container">
      <div className="create-post-item-container">
        <AccountCircleOutlinedIcon fontSize="large"></AccountCircleOutlinedIcon>
      </div>
      <div className="create-post-item-container">
        <TextField 
          className="custom-text-field" 
          placeholder="What's on your mind?" 
          variant="filled"
          onClick={handleOpenPopup}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleOpenPopup}>
                  <InsertPhotoOutlinedIcon fontSize="large"></InsertPhotoOutlinedIcon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </div>

      <CreatePostPopUp
        openPopup={openPopup}
        handleClosePopup={handleClosePopup}>
      </CreatePostPopUp>
    </div>
  );
};

export default CreatePost;
