import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useBankStore } from "../../../hooks/useBankStore";
import "./SendMoneyPopup.css";
import { Button } from "@mui/material";

const ValidateTransaction = ({selectedContact, amount, handlePrevStage}) => {
  const { startCreatingTransaction } = useBankStore();
  const { auth } = useAuth();
  const [keyFile, setKeyFile] = useState(null);

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
      formData.append("userName", auth.user)

      return startCreatingTransaction(formData);
    }

    //alert("Please upload key file."); // TODO Cambiar
  };

  return (
    <form id="form-key" onSubmit={handleSubmit}>
      <label>
        Key:
        <input id="input-key" type="file" name="key" accept=".key" onChange={handleKeyChange} />
      </label>
      <div id="buttons-container">
        <Button className="btn" onClick={handlePrevStage}>
              Prev
        </Button>
        <Button className="btn" type="submit">Submit Transaction</Button>
      </div>
    </form>
  );
};

export default ValidateTransaction;
