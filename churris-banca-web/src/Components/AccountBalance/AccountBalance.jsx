import React from "react";
import "./AccountBalance.css";

const AccountBalance = () => {
  return (
    <div id="account-balance">
      <text>Balance churriminos</text>
      <text>Ch15,500.00</text>
      <div id="coins">
        <div className="coin-type">
          <text>Churriminos</text>
        </div>
        <div className="coin-type">
          <text>Euros</text>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
