import React from "react";
import AccountBalance from "../../Components/AccountBalance/AccountBalance";
import Header from "../../Components/Header/Header";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import Transaction from "../../Components/Transaction/Transaction";
import ClientServerProvider from "../../Components/Providers/ClientServerProvider";

export const handleTransactions = (messageFromServer) => {};

// Elimminar despues
const data = [
  {
    transactionID: "87654321",
    transactionType: "received",
    transactionUser: "Paulina Rodriguez Jimenez",
    transactionDate: "11-04-2024",
    transactionTime: "13:08",
    transactionAmount: 5500,
  },
  {
    transactionID: "56781234",
    transactionType: "sent",
    transactionUser: "Roberto Chavez Madriz",
    transactionDate: "12-02-2022",
    transactionTime: "12:12",
    transactionAmount: 2000,
  },
  {
    transactionID: "43215678",
    transactionType: "received",
    transactionUser: "Ramina Chavez Gonzalez",
    transactionDate: "12-03-2021",
    transactionTime: "10:25",
    transactionAmount: 2500,
  },
  {
    transactionID: "13572468",
    transactionType: "sent",
    transactionUser: "Mario Bermudez Fuentes",
    transactionDate: "15-02-2023",
    transactionTime: "09:09",
    transactionAmount: 1200,
  },
  {
    transactionID: "97531246",
    transactionType: "received",
    transactionUser: "Maria Rodriguez Hernandez",
    transactionDate: "12-10-2022",
    transactionTime: "15:20",
    transactionAmount: 1400,
  },
  {
    transactionID: "11223344",
    transactionType: "sent",
    transactionUser: "Josefo Villareal Sanchez",
    transactionDate: "07-01-2020",
    transactionTime: "18:00",
    transactionAmount: 10000,
  },
  {
    transactionID: "12356748",
    transactionType: "received",
    transactionUser: "Fernando Villareal Sibaja",
    transactionDate: "01-04-2021",
    transactionTime: "20:20",
    transactionAmount: 10200,
  },
];

const BankingPage = () => {
  return (
    <ClientServerProvider>
      <div id="banking-page-container">
        <Header />
        <div className="container">
          <AccountBalance />

          {data.map((transaction) => (
            <Transaction
              key={transaction.transactionID}
              transactionID={transaction.transactionID}
              transactionType={transaction.transactionType}
              transactionUser={transaction.transactionUser}
              transactionDate={transaction.transactionDate}
              transactionTime={transaction.transactionTime}
              transactionAmount={transaction.transactionAmount}
            />
          ))}

          <PaginationBar />
        </div>
      </div>
    </ClientServerProvider>
  );
};

export default BankingPage;
