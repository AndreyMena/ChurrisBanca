import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';

import "./UserInformationField.css";

const UserInformationField = ({id, label, defaultValue, type = "text"}) => {
  const [isTextFieldDisabled, setIsTextFieldDisabled] = useState(true);
  const [isEditIconVisible, setIsEditIconVisible] = useState(true);
  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(false);
  const [text, setText] = useState('');
  // const [answer, setAnswer] = useState('');

  const handleEnableTextField = () => {
    setIsTextFieldDisabled(false);
    setIsEditIconVisible(false);
    setIsSaveButtonVisible(true);
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  // Código para mandar mensaje a un servidor locar de Node.js

  // const sendMessageToServer = (event) => {
  //   event.preventDefault();

  //   fetch('http://localhost:3001/ruta', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ texto: text })
  //   })
  //   .then(response => response.text())
  //   .then(data => {
  //     setAnswer(data);
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('Error al enviar la solicitud:', error);
  //   });
  // };

  const handleSaveClick = (event) => {
    console.log(text);

    // sendMessageToServer(event);

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
        type={type}
        label={label}
        defaultValue={defaultValue}
        variant="standard"
        onChange={handleChange}
      />
      {isEditIconVisible && <IconButton className="user-information-editing-components" onClick={handleEnableTextField}>
        <EditIcon color="action"/>
      </IconButton>}
      {isSaveButtonVisible && <Button className="user-information-editing-components" variant="outlined" onClick={handleSaveClick}>Save</Button>}
    </div>
  );
};

UserInformationField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default UserInformationField;