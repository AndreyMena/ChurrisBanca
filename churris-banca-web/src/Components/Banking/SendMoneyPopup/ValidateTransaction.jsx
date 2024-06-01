import React, { useState, useEffect, useRef } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { UploadOutlined } from "@mui/icons-material";
import useAuth from "../../../hooks/useAuth";
import { useBankStore } from "../../../hooks/useBankStore";
import "./SendMoneyPopup.css";

const ValidateTransaction = ({ selectedContact, amount, handlePrevStage }) => {
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
    if (showResMsg) {
      setTimeout(() => {
        setShowResMsg(false); // Ocultar mensaje después de 2 segundos
      }, 2000);
    }
  }, [showResMsg]);

  return (
    <form id="form-key" onSubmit={handleSubmit}>
      <label>
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
      </label>
      {showResMsg && resMsg && (
        <Typography
          id={resMsg === "Transaction succesful" ? "success-msg" : "error-msg"}
        >
          {resMsg}
        </Typography>
      )}
      <div id="buttons-container">
        <Button className="btn" onClick={handlePrevStage}>
          Prev
        </Button>
        <Button className="btn" type="submit">
          Submit Transaction
        </Button>
      </div>
    </form>
  );
};

export default ValidateTransaction;
