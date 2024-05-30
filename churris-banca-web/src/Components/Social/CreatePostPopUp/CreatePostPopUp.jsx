import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import "./CreatePostPopUp.css";

const CreatePostPopUp = ({ openPopup, handleClosePopup }) => {
  const handleSendPost = () => {

  }

  return (
    <Dialog open={openPopup} onClose={handleClosePopup}>
      <DialogTitle align="center">What's on your mind?</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-textarea"
          placeholder="What's on your mind?"
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSendPost}>Send post</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreatePostPopUp;