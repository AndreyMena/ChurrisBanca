import React from "react";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import AccountBalance from "../../Components/AccountBalance/AccountBalance";
import TransactionHistory from "../../Components/TransactionHistory/TransactionHistory";

const BankingPage = () => {
  return (
    <>
      <Header />

      <div className="container">
        <AccountBalance />

        <TransactionHistory />

        <Pagination />
      </div>
    </>
  );
};

export default BankingPage;
