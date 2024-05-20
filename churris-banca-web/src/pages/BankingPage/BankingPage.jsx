import React from "react";
import AccountBalance from "../../Components/Banking/AccountBalance/AccountBalance";
import Header from "../../Components/Header/Header";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import ClientServerProvider from "../../Components/Providers/ClientServerProvider";
import TransactionList from "../../Components/Banking/TransactionList/TransactionList";

export const handleTransactions = (messageFromServer) => {};

const BankingPage = () => {
  return (
    <ClientServerProvider>
      <div id="banking-page-container">
        <Header />
        <div className="container">
          <AccountBalance />

          <TransactionList />

          <PaginationBar />
        </div>
      </div>
    </ClientServerProvider>
  );
};

export default BankingPage;
