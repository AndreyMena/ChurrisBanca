import { useState } from "react";
import axios from "../api/axios";

export const useBankStore = () => {
  const [transactions, setTransactions] = useState([]);
  const [bankAccountUsernames, setBankAccountUsernames] = useState([]);

  const startLoadingTransactions = async (userName) => {
    try {
      const { data } = await axios.get(`bank/transactions/${userName}`);
      setTransactions(data.transactions);
    } catch (error) {
      console.log("Error loading transactions", error);
    }
  };

  const startLoadingBankAccountUsernames = async () => {
    try {
      const { data } = await axios.get("bank/accounts");
      setBankAccountUsernames(data.bankAccountUsernames);
    } catch (error) {
      console.log("Error loading bank account usernames", error);
    }
  };

  return {
    transactions,
    bankAccountUsernames,

    setBankAccountUsernames,

    startLoadingTransactions,
    startLoadingBankAccountUsernames,
  };
};
