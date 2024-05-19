import React, { useEffect } from "react";
import Transaction from "../Transaction/Transaction";
import { useBankStore } from "../../../hooks/useBankStore";

const TransactionList = () => {
  const { startLoadingTransactions, transactions } = useBankStore();

  useEffect(() => {
    startLoadingTransactions("roberto.chavez.madriz"); // TODO: Modificar
  }, []);

  return (
    <>
      {transactions.map((transaction) => (
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
    </>
  );
};

export default TransactionList;
