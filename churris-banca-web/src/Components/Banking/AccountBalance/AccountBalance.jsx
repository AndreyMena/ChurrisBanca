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

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    startLoadingBankAccount(auth.user);
  }, []);

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
          {accountStatus}
        </Typography>
      </div>

      <SendMoneyPopup
        openPopup={openPopup}
        handleClosePopup={handleClosePopup}
        currency={currency}
        accountBalance={accountStatus}
      />
    </div>
  );
};

export default AccountBalance;
