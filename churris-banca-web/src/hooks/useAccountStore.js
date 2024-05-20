import { useState } from "react";
import axios from "../api/axios";

const initialStateAccount = {
  id: 0,
  userName: "",
  accountStatus: 0,
  currency: "",
};

export const useAccountStore = () => {
  const [account, setAccount] = useState(initialStateAccount);

  const startLoadingAccount = async (accountUsername) => {
    try {
      const { data } = await axios.get(`account/${accountUsername}`);
      setAccount(data.account);
    } catch (error) {
      console.log("Error loading bank account", error);
    }
  };

  return {
    account,

    startLoadingAccount,
  };
};
