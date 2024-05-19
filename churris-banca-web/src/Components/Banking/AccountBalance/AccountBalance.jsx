import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import { useBankStore } from "../../../hooks/useBankStore";
import SendMoneyPopup from "../SendMoneyPopup/SendMoneyPopup";
import "./AccountBalance.css";

export const handleAccountBalance = (messageFromServer) => {};

const AccountBalance = () => {
  const { startLoadingBankAccount, bankAccount } = useBankStore();
  const [openPopup, setOpenPopup] = useState(false);

  const { id: bankAccountId, currency, accountStatus } = bankAccount;

  /* // Hay que recibir el mensaje desde el servidor que contiene los datos del balance/saldo de la cuenta obtenidos desde la base de datos y asignar esos datos a las siguientes variables para luego renderizar el componente AccountBalance ya con esos datos.
  const [accountId, setAccountId] = useState("XXXXXXXXXX");
  const [typeCurrency, setTypeCurrency] = useState("Churruminos");
  const [accountBalance, setAaccountBalance] = useState(1550000);

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
  }, []);*/

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    startLoadingBankAccount(1); // TODO: Modificar
  }, []);

  return (
    <div id="account-container">
      <div className="info">
        <Typography>Account ID: {bankAccountId}</Typography>
      </div>
      <div className="info">
        <Button id="button-send-money" onClick={handleOpenPopup}>
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
        <Typography>Balance of {currency}</Typography>
        <Typography>Ch{accountStatus}</Typography>
      </div>

      <SendMoneyPopup
        openPopup={openPopup}
        handleClosePopup={handleClosePopup}
        accountBalance={accountStatus}
      />
    </div>
  );
};

export default AccountBalance;
