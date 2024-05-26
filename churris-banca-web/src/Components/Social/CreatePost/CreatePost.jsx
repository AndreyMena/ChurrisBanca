import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import TextField from "@mui/material/TextField";

import "./CreatePost.css";

const CreatePost = () => {
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <InsertPhotoOutlinedIcon fontSize="large"></InsertPhotoOutlinedIcon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </div>
    </div>
  );
};

export default CreatePost;
