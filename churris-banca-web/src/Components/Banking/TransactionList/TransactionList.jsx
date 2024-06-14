import React, { useEffect, useState } from "react";
import Transaction from "../Transaction/Transaction";
import  PaginationBar  from "../PaginationBar/PaginationBar";
import { useBankStore } from "../../../hooks/useBankStore";
import useAuth from "../../../hooks/useAuth";

const TransactionList = () => {
  const { startLoadingTransactions, transactions } = useBankStore();
  const { auth } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 6;
  // Calcular el índice de las transacciones a mostrar
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  useEffect(() => {
    startLoadingTransactions(auth.user);

    const intervalId = setInterval(() => {
      startLoadingTransactions(auth.user);
      console.log("new transactions");
    }, 15000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentTransactions.map((transaction) => (
        <Transaction
          key={transaction.transactionID}
          transactionID={transaction.transactionID}
          transactionUser={
            transaction.transactionType === "received"
              ? transaction.originAccount
              : transaction.targetAccount
          }
          transactionType={transaction.transactionType}
          transactionDate={transaction.transactionDate}
          transactionTime={transaction.transactionTime}
          transactionAmount={transaction.transactionAmount}
        />
      ))}

      <PaginationBar 
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default TransactionList;
