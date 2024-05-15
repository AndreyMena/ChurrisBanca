import React from "react";
import  Typography from '@mui/material/Typography';

import "./Transaction.css"

const Transaction = ({transactionID, transactionUser, transactionDate, transactionTime, transactionAmount}) => {
  // Hay que recibir el mensaje desde el servidor que contiene los datos del balance/saldo de la cuenta obtenidos desde la base de datos y asignar esos datos a las siguientes variables para luego renderizar el componente AccountBalance ya con esos datos.
  const transactionIconType = "->Ch";
  const transactionType = "Transaction received";

  return (
    < div id="transactions-history-container" >
      <div className="transaction-information-container">
        <Typography>{transactionIconType}</Typography>
        <Typography>id: {transactionID}</Typography>
      </div>
      <div id="transaction-central-information-container">
        <Typography>{transactionType}</Typography>
        <Typography>{transactionUser}</Typography>
        <Typography>{transactionDate} {transactionTime}</Typography>
      </div>
      <div className="transaction-information-container">
        <Typography>Ch {transactionAmount}</Typography>
      </div>
    </div >
  );
};

export default Transaction;
