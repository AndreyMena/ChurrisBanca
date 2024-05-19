import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import "./AccountBalance.css";

export const handleAccountBalance = (messageFromServer) => {};

const AccountBalance = () => {
  // Hay que recibir el mensaje desde el servidor que contiene los datos del balance/saldo de la cuenta obtenidos desde la base de datos y asignar esos datos a las siguientes variables para luego renderizar el componente AccountBalance ya con esos datos.
  const [accountId, setAccountId] = useState("XXXXXXXXXX");
  const [typeCurrency, setTypeCurrency] = useState("Churruminos");
  const [accountBalance, setAaccountBalance] = useState("Ch 15,500.00");

  const userCredentials = {
    type: "getUserAccountBalance",
    user: "userName",
    password: "password",
  };

  useEffect(() => {
    console.log("use effect");
    // Realiza la solicitud al servidor, hay que definir la ruta al servidor
    axios
      .post("/ruta-al-servidor", userCredentials)

      .then((response) => {
        // Accede al valor de los atributos dentro del mensaje JSON para luego asignarlos a variables.
        const id = response.data.accountId;
        const currency = response.data.accountId;
        const balance = response.data.accountId;
        // Con las variales se actuliza el valor de los useState
        setAccountId(id);
        setTypeCurrency(currency);
        setAaccountBalance(balance);
      })
      .catch((error) => {
        // Maneja los errores si la solicitud falla
        console.error(
          "Error al realizar la conexión o recibir el texto del servidor:",
          error
        );
      });
  }, []);

  return (
    <div id="account-container">
      <div className="info">
        <Typography>Account ID: {accountId}</Typography>
      </div>
      <div className="info">
        <Button id="button-send-money">
          <div id="info-button">
            Send money
            <div id="icon">
              Ch
              <ArrowForwardIcon />
            </div>
          </div>
        </Button>
      </div>
      <div className="info">
        <Typography>Balance of {typeCurrency}</Typography>
        <Typography>{accountBalance}</Typography>
      </div>
    </div>
  );
};

export default AccountBalance;
