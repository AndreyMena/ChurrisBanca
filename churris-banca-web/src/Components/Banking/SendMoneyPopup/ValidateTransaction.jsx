import React, { useState, useEffect, useRef } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { UploadOutlined } from "@mui/icons-material";
import useAuth from "../../../hooks/useAuth";
import { useBankStore } from "../../../hooks/useBankStore";
import "./SendMoneyPopup.css";
import "../../../App.css";

const ValidateTransaction = ({ selectedContact, amount, handlePrevStage, handleNewTransaction, handleResetStage }) => {
  const { startCreatingTransaction, resMsg } = useBankStore();
  const { auth } = useAuth();
  const [keyFile, setKeyFile] = useState(null);
  const [showResMsg, setShowResMsg] = useState(false);
  const fileInputRef = useRef();

  const handleKeyChange = (event) => {
    setKeyFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (keyFile) {
      const formData = new FormData();
      formData.append("key", keyFile);
      formData.append("nicknameCuentaDestino", selectedContact);
      formData.append("amount", amount);
      formData.append("userName", auth.user);

      startCreatingTransaction(formData);
      setShowResMsg(true);
    }
  };

  useEffect(() => {
    if (resMsg === "Transaction successful") {
      handleNewTransaction(amount);
    }
  }, [resMsg]);

  useEffect(() => {
    if (showResMsg) {
      setTimeout(() => {
        setShowResMsg(false);
        handleResetStage();
      }, 2000);
    }
  }, [showResMsg]);

  return (
    <form id="form-key" onSubmit={handleSubmit}>
      <label id="key-uploader">
        Key:
        <input
          id="input-key"
          type="file"
          name="key"
          accept=".key"
          ref={fileInputRef}
          onChange={handleKeyChange}
          style={{ display: "none" }}
        />
        <IconButton onClick={() => fileInputRef.current.click()}>
          <UploadOutlined />
        </IconButton>
        <Typography>{keyFile ? keyFile.name : "No file selected"}</Typography>
      </label>
      {showResMsg && resMsg && (
        <Typography
          id={resMsg === "Transaction successful" ? "success-msg" : "error-msg"}
        >
          {resMsg}
        </Typography>
      )}
      <div id="buttons-container">
        <Button variant="contained" className="btn" onClick={handlePrevStage}>
          Prev
        </Button>
        <Button 
          variant="contained" 
          className="btn" 
          type="submit" 
          disabled={!keyFile || showResMsg} 
        >
            Submit Transaction
        </Button>
      </div>
    </form>
  );
};

export default ValidateTransaction;
