import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useAuth from "../../../hooks/useAuth";
import { useBankStore } from "../../../hooks/useBankStore";
import SendMoneyPopup from "../SendMoneyPopup/SendMoneyPopup";
import "./AccountBalance.css";

const AccountBalance = () => {
  const { startLoadingBankAccount, bankAccount } = useBankStore();
  const { auth } = useAuth();
  const [openPopup, setOpenPopup] = useState(false);
  const { userName, currency, accountStatus } = bankAccount;
  const [balance, setBalance] = useState(0);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleNewTransaction = (number) => {
    setBalance(balance - number);
  }

  useEffect(() => {
    startLoadingBankAccount(auth.user);
  }, []);

  useEffect(() => {
    setBalance(Number(accountStatus));
  }, [accountStatus]);

  return (
    <div id="account-container">
      <div className="info">
        <Typography>Account name: {userName}</Typography>
      </div>
      <div className="info">
        <Button variant="contained" onClick={handleOpenPopup}>
          <div id="info-button">
            Send money
            <div id="icon-money">
              {currency}
              <ArrowForwardIcon />
            </div>
          </div>
        </Button>
      </div>
      <div className="info">
        <Typography>Balance</Typography>
        <Typography>
          {currency}
          {balance}
        </Typography>
      </div>

      <SendMoneyPopup
        openPopup={openPopup}
        handleClosePopup={handleClosePopup}
        currency={currency}
        accountBalance={balance}
        handleNewTransaction={handleNewTransaction}
      />
    </div>
  );
};

export default AccountBalance;
