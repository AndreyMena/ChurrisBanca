import React, { useEffect, useState } from "react";
import {
  Button,
  DialogContent,
  DialogTitle,
  Input,
  Typography,
} from "@mui/material";
import "./SendMoneyPopup.css";
import "../../../App.css";

const MoneyAmount = ({
  contact,
  accountBalance,
  handlePrevStage,
  handleNextStage,
  amount,
  setAmount,
}) => {
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    }
  }, [errorMessage]);

  const isValidNumber = (event) => {
    if (!isNaN(event.target.value)) {
      setAmount(event.target.value);
    }
  };

  const handleClick = () => {
    if (parseInt(amount) > accountBalance) {
      return setErrorMessage(true);
    }

    handleNextStage();
  };

  return (
    <>
      <DialogTitle>
        How much money do you want to send to {contact}?
      </DialogTitle>
      <DialogContent>
        <div id="amount-errormsg">
          <div id="amount">
            <Typography id="coin-amount">Ch</Typography>
            <Input value={amount} onChange={isValidNumber} />
          </div>
          {errorMessage && (
            <Typography id="error-msg">Invalid Transaction</Typography>
          )}
        </div>

        <div id="buttons-container">
          <Button variant="contained" className="btn" onClick={handlePrevStage}>
            Prev
          </Button>
          <Button  variant="contained" className="btn" disabled={amount <= 0} onClick={handleClick}>
            Next
          </Button>
        </div>
      </DialogContent>
    </>
  );
};

export default MoneyAmount;
