import React from "react";
import  Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Transaction.css"

const Transaction = ({transactionID, transactionType, transactionUser, transactionDate, transactionTime, transactionAmount}) => {
  // Hay que recibir el mensaje desde el servidor que contiene los datos del balance/saldo de la cuenta obtenidos desde la base de datos y asignar esos datos a las siguientes variables para luego renderizar el componente AccountBalance ya con esos datos.
  return (
    < div id="transactions-history-container" >
      <div className="transaction-information-container">
        {
          transactionType === 'received' ? 
            <Typography id="coin" style={{ color: '#28a745'}}><ArrowForwardIcon/>Ch</Typography> : 
            <Typography id="coin" style={{ color: '#dc3545'}}>Ch<ArrowForwardIcon/></Typography>
        }
        <Typography>id: {transactionID}</Typography>
      </div>
      <div id="transaction-central-information-container">
        <Typography>Transaction {transactionType === 'received' ? 'received' : 'sent'}</Typography>
        <Typography>{transactionUser}</Typography>
        <Typography>{transactionDate} {transactionTime}</Typography>
      </div>
      <div className="transaction-information-container">
        {
          transactionType === 'received' ? 
            <Typography style={{ color: '#28a745'}}>+ Ch {transactionAmount} </Typography> : 
            <Typography style={{ color: '#dc3545'}}>- Ch {transactionAmount} </Typography>
        }
        
      </div>
    </div >
  );
};

export default Transaction;
