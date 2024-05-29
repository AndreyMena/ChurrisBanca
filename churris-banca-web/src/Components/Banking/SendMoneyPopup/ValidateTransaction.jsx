import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useBankStore } from "../../../hooks/useBankStore";

const ValidateTransaction = ({selectedContact, amount}) => {
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

      return startCreatingTransaction(formData, auth.user);
    }

    //alert("Please upload key file."); // TODO Cambiar
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Key:
        <input type="file" name="key" accept=".key" onChange={handleKeyChange} />
      </label>
      <button type="submit">Submit Transaction</button>
    </form>
  );
};

export default ValidateTransaction;
