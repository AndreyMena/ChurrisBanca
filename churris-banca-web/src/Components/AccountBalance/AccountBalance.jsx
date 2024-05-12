import React from "react";
import  Typography from '@mui/material/Typography';

import "./AccountBalance.css";

const AccountBalance = () => {
  // Hay que recibir el mensaje desde el servidor que contiene los datos del balance/saldo de la cuenta obtenidos desde la base de datos y asignar esos datos a las siguientes variables para luego renderizar el componente AccountBalance ya con esos datos.
  const accountId = "XXXXXXXXXX";
  const typeCurrency = "Churruminos";
  const accountBalance = "Ch 15,500.00";

  return (
    <div id="account-container">
      <div id="account-id-container">
        <Typography>Account ID: {accountId}</Typography>
      </div>
      <div id="account-balance-container">
        <Typography>Balance of {typeCurrency}</Typography>
        <Typography>{accountBalance}</Typography>
      </div>
    </div>
  );
};

export default AccountBalance;
