import React from "react";
import Header from "../../Components/Common/Header/Header";
import AccountBalance from "../../Components/Banking/AccountBalance/AccountBalance";
import TransactionList from "../../Components/Banking/TransactionList/TransactionList";

const BankingPage = () => {
  return (
    <div id="banking-page-container">
      <Header />
      <div className="container">
        <AccountBalance />

        <TransactionList />
      </div>
    </div>
  );
};

export default BankingPage;
