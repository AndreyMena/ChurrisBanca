import React from "react";
import AccountBalance from "../../Components/AccountBalance/AccountBalance";
import Header from "../../Components/Header/Header";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import Transaction from "../../Components/Transaction/Transaction";

const BankingPage = () => {
  return (
    <div id="banking-page-container">
      <Header />
      <div className="container">
        <AccountBalance></AccountBalance>
        <Transaction></Transaction>
        <Transaction></Transaction>
        <Transaction></Transaction>
        <Transaction></Transaction>
        <Transaction></Transaction>
        <Transaction></Transaction>
        <Transaction></Transaction>
        <PaginationBar></PaginationBar>
      </div>
    </div>
  );
};

export default BankingPage;
