import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

import "./UserInformationField.css";

const UserInformationField = ({
  id,
  label,
  defaultValue,
  onChange,
  type = "text",
}) => {
  const [isTextFieldDisabled, setIsTextFieldDisabled] = useState(true);
  const [isEditIconVisible, setIsEditIconVisible] = useState(true);
  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(false);
  const [text, setText] = useState("");

  const handleEnableTextField = () => {
    setIsTextFieldDisabled(false);
    setIsEditIconVisible(false);
    setIsSaveButtonVisible(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveClick = (event) => {
    console.log(text);

    setIsTextFieldDisabled(true);
    setIsEditIconVisible(true);
    setIsSaveButtonVisible(false);
  };

  return (
    <div className="user-information-editing-container">
      <TextField
        className="user-information-editing-components"
        disabled={isTextFieldDisabled}
        id={id}
        type={type}
        label={label}
        value={defaultValue}
        variant="standard"
        onChange={(e) => onChange(e.target.value)}
      />
      {isEditIconVisible && (
        <IconButton
          className="user-information-editing-components"
          onClick={handleEnableTextField}
        >
          <EditIcon color="action" />
        </IconButton>
      )}
      {isSaveButtonVisible && (
        <Button
          className="user-information-editing-components"
          variant="outlined"
          onClick={handleSaveClick}
        >
          Save
        </Button>
      )}
    </div>
  );
};

UserInformationField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default UserInformationField;
