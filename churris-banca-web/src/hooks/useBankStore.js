import { useState } from "react";
import axios from "../api/axios";

const initialState = {
  id: 0,
  userName: "",
  accountStatus: 0,
  currency: "",
};

export const useBankStore = () => {
  const [bankAccount, setbankAccount] = useState(initialState);

  const startLoadingBankAccount = async (bankAccountId) => {
    try {
      const { data } = await axios.get(`bank/${bankAccountId}`);
      setbankAccount(data.bankAccount);
    } catch (error) {
      console.log("Error loading bank account", error);
    }
  };

  return {
    bankAccount,

    startLoadingBankAccount,
  };
};
