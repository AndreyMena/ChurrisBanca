import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";
import "./UserInformationField.css";

const UserInformationField = ({
  id,
  label,
  defaultValue,
  onChange,
  type = "text",
}) => {
  const { startUpdatingValueAccount } = useSocialStore();
  const { auth } = useAuth();
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
    onChange(event.target.value);
  };

  const handleSaveClick = () => {
    startUpdatingValueAccount(auth.user, text, label);

    setIsTextFieldDisabled(true);
    setIsEditIconVisible(true);
    setIsSaveButtonVisible(false);
  };

  useEffect(() => {
    setText(defaultValue);
  }, [defaultValue]);

  return (
    <div className="user-information-editing-container">
      <TextField
        className="user-information-editing-components"
        disabled={isTextFieldDisabled}
        id={id}
        type={type}
        label={label}
        value={text}
        variant="standard"
        onChange={handleChange}
      />
      {isEditIconVisible && (
        <IconButton onClick={handleEnableTextField}>
          <EditIcon color="action" />
        </IconButton>
      )}
      {isSaveButtonVisible && (
        <Button variant="outlined" onClick={handleSaveClick}>
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
