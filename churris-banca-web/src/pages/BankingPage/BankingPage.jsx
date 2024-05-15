import React from "react";
import AccountBalance from "../../Components/AccountBalance/AccountBalance";
import Header from "../../Components/Header/Header";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import Transaction from "../../Components/Transaction/Transaction";

// Elimminar despues
const data = [
  {
    transactionID: "87654321", 
    transactionUser: "Paulina Rodriguez Jimenez", 
    transactionDate: "11-04-2024", 
    transactionTime: "13:08", 
    transactionAmount: 5500
},
{
  transactionID: "56781234", 
  transactionUser: "Roberto Chavez Madriz", 
  transactionDate: "12-02-2022", 
  transactionTime: "12:12", 
  transactionAmount: 2000
},
{
  transactionID: "43215678", 
  transactionUser: "Ramina Chavez Gonzalez", 
  transactionDate: "12-03-2021", 
  transactionTime: "10:25", 
  transactionAmount: 2500
},
{
  transactionID: "13572468", 
  transactionUser: "Mario Bermudez Fuentes", 
  transactionDate: "15-02-2023", 
  transactionTime: "09:09", 
  transactionAmount: 1200
},
{
  transactionID: "97531246", 
  transactionUser: "Maria Rodriguez Hernandez", 
  transactionDate: "12-10-2022", 
  transactionTime: "15:20", 
  transactionAmount: 1400
},
{
  transactionID: "11223344", 
  transactionUser: "Josefo Villareal Sanchez", 
  transactionDate: "07-01-2020", 
  transactionTime: "18:00", 
  transactionAmount: 10000
},
{
  transactionID: "12356748", 
  transactionUser: "Fernando Villareal Sibaja", 
  transactionDate: "01-04-2021", 
  transactionTime: "20:20", 
  transactionAmount: 10200
},
]

const BankingPage = () => {
  return (
    <div id="banking-page-container">
      <Header />
      <div className="container">
        <AccountBalance></AccountBalance>
          {data.map((transaction) => (
            <Transaction key={transaction.transactionID} transactionID={transaction.transactionID} transactionUser={transaction.transactionUser}
              transactionDate={transaction.transactionDate} transactionTime={transaction.transactionTime} transactionAmount={transaction.transactionAmount}/>
          ))}

        <PaginationBar></PaginationBar>
      </div>
    </div>
  );
};

export default BankingPage;
