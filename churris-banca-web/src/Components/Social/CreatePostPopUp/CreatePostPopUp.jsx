import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";
import "./CreatePostPopUp.css";
import useRefreshToken from "../../../hooks/useRefreshToken";

const CreatePostPopUp = ({ openPopup, handleClosePopup }) => {
  const { auth } = useAuth();
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();
  const { sendNewPost } = useSocialStore();
  const refresh = useRefreshToken();

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }

  const handleSendPost = async () => {
    const payload = {
      userName: auth.user,
      content: text,
    };

    let formData = null;
    if (image) {
      formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    }
    
    await sendNewPost(payload, formData);
    await handleClosePopup();
    //window.location.reload();
  }

  return (
    <Dialog open={openPopup} onClose={handleClosePopup}>
      <DialogTitle align="center">What's on your mind?</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-textarea"
          placeholder="What's on your mind?"
          multiline
          fullWidth
          value={text}
          onChange={handleTextChange}
        />
      </DialogContent>
      <DialogActions id="dialog-actions-container">
        <input 
          type="file" 
          name="image" 
          accept=".png, .jpg" 
          ref={fileInputRef} 
          onChange={handleImageChange}
          style={{display: "none"}}
        />
        <div id="image-uploader">
          <IconButton onClick={() => fileInputRef.current.click()}>
            <InsertPhotoOutlinedIcon fontSize="large"/>
            </IconButton>
            <Typography>{image ? image.name : "No file selected"}</Typography>
        </div>
        <Button variant="contained" onClick={handleSendPost} disabled={!text}>Send post</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreatePostPopUp;