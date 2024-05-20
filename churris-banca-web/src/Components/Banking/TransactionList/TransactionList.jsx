import React, { useEffect } from "react";
import Transaction from "../Transaction/Transaction";
import { useBankStore } from "../../../hooks/useBankStore";
import useAuth from "../../../hooks/useAuth";

const TransactionList = () => {
  const { startLoadingTransactions, transactions } = useBankStore();
  const { auth } = useAuth();

  useEffect(() => {
    startLoadingTransactions(auth.user);
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
