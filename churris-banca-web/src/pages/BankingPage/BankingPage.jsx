import React from "react";
import Header from "../../Components/Common/Header/Header";
import AccountBalance from "../../Components/Banking/AccountBalance/AccountBalance";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import TransactionList from "../../Components/Banking/TransactionList/TransactionList";

export const handleTransactions = (messageFromServer) => {};

const BankingPage = () => {
  return (
    <div id="banking-page-container">
      <Header />
      <div className="container">
        <AccountBalance />

        <TransactionList />

        <PaginationBar />
      </div>
    </div>
  );
};

export default BankingPage;
