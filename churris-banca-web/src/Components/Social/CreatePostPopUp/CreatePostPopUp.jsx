import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";

import "./CreatePostPopUp.css";

const CreatePostPopUp = ({ openPopup, handleClosePopup }) => {
  const { auth } = useAuth();
  const [text, setText] = useState('');
  const { sendNewPost } = useSocialStore();

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSendPost = () => {
    const payload = {
      userName: auth.user,
      content: text
    };

    sendNewPost(payload);
    handleClosePopup();
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
      <DialogActions>
        <Button variant="contained" onClick={handleSendPost}>Send post</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreatePostPopUp;