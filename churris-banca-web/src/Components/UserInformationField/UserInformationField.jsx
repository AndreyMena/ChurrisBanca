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
  const [text, setText] = useState('');
  // const [answer, setAnswer] = useState('');

  const id = props.id;
  const label = props.label;

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
        label={label}
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

export default UserInformationField;