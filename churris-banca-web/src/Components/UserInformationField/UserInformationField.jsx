import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";

import "./UserInformationField.css";

const UserInformationField = (props) => {
  const [isTextFieldDisabled, setIsTextFieldDisabled] = useState(true);
  const [isEditIconVisible, setIsEditIconVisible] = useState(true);
  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(false);

  const id = props.id;
  const label = props.label;

  const handleEnableTextField = () => {
    setIsTextFieldDisabled(false);
    setIsEditIconVisible(false);
    setIsSaveButtonVisible(true);
  }

  const handleSaveClick = () => {
    console.log("Información guardada")
    setIsTextFieldDisabled(true);
    setIsEditIconVisible(true);
    setIsSaveButtonVisible(false);
  }

  return (
    <div className="user-information-editing-container">
      <TextField
        className="user-information-editing-components"
        disabled={isTextFieldDisabled}
        id={id}
        label={label}
        variant="standard"
      />
      {isEditIconVisible && <IconButton className="user-information-editing-components" onClick={handleEnableTextField}>
        <EditIcon color="action"/>
      </IconButton>}
      {isSaveButtonVisible && <Button className="user-information-editing-components" variant="outlined" onClick={handleSaveClick}>Save</Button>}
    </div>
  );
};

export default UserInformationField;