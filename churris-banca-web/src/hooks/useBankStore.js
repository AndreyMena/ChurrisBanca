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
  const [resMsg, setResMsg] = useState("");

  const startLoadingBankAccount = async (bankAccountUsername) => {
    try {
      const { data } = await axios.get(`bank/account/${bankAccountUsername}`);
      setbankAccount(data.bankAccount);
    } catch (error) {
      console.log("Error loading bank account");
    }
  };

  const startLoadingTransactions = async (userName) => {
    try {
      const { data } = await axios.get(`bank/transactions/${userName}`);
      setTransactions(data.transactions);
    } catch (error) {
      console.log("Error loading transactions");
    }
  };

  const startCreatingTransaction = async (key) => {
    try {
      const {data} = await axios.post("bank/transaction", key, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setResMsg(data.message);
      console.log(data.message);
    } catch (error) {
      setResMsg("Error completing the transaction");
    }
  };

  return {
    bankAccount,
    transactions,
    resMsg,

    startLoadingBankAccount,
    startLoadingTransactions,
    startCreatingTransaction,
  };
};
