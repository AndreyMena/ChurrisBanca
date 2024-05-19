import { useState } from "react";
import axios from "../api/axios";

const initialStateBankAccount = {
  id: 0,
  userName: "",
  accountStatus: 0,
  currency: "",
};

export const useBankStore = () => {
  const [bankAccount, setbankAccount] = useState(initialStateBankAccount);
  const [transactions, setTransactions] = useState([]);

  const startLoadingBankAccount = async (bankAccountId) => {
    try {
      const { data } = await axios.get(`bank/${bankAccountId}`);
      setbankAccount(data.bankAccount);
    } catch (error) {
      console.log("Error loading bank account", error);
    }
  };

  const startLoadingTransactions = async (userName) => {
    try {
      const { data } = await axios.get(`bank/transactions/${userName}`);
      setTransactions(data.transactions);
    } catch (error) {
      console.log("Error loading transactions", error);
    }
  };

  return {
    bankAccount,
    transactions,

    startLoadingBankAccount,
    startLoadingTransactions,
  };
};
