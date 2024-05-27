import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useBankStore } from "../../../hooks/useBankStore";

const ValidateTransaction = () => {
  const { startCreatingTransaction } = useBankStore();
  const { auth } = useAuth();
  const [keyFile, setKeyFile] = useState(null);

  const handleKeyChange = (event) => {
    setKeyFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (keyFile) {
      return startCreatingTransaction(keyFile, auth.user);
    }

    //alert("Please upload key file."); // TODO Cambiar
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*<label>
        Certificate:
        <input type="file" accept=".crt" />
      </label>*/}
      <label>
        Key:
        <input type="file" accept=".key" onChange={handleKeyChange} />
      </label>
      <button type="submit">Submit Transaction</button>
    </form>
  );
};

export default ValidateTransaction;
