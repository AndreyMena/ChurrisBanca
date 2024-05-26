import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useSocialStore from "../../../hooks/useSocialStore";
import useAuth from "../../../hooks/useAuth";
import SendMoneyPopup from "../SendMoneyPopup/SendMoneyPopup";
import "./AccountBalance.css";

const AccountBalance = () => {
  const { startLoadingAccount, account } = useSocialStore();
  const { auth } = useAuth();
  const [openPopup, setOpenPopup] = useState(false);

  const { id: bankAccountId, currency, accountStatus } = account;

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    startLoadingAccount(auth.user);
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
