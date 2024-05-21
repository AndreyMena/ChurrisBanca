import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";

import "./PostHeader.css"

const PostHeader = () => {

  return (
    <div id="post-header-container">
      <AccountCircleOutlinedIcon fontSize="large"></AccountCircleOutlinedIcon>
      <Typography> User ***</Typography>
      <Button variant="text">Unfollow</Button>
    </div>
  );
};

export default PostHeader;
