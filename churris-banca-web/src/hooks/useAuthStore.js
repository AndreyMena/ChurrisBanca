import { useState, useEffect } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

export const useAuthStore = () => {
  const { setAuth } = useAuth();
  const [msg, setMsg] = useState("");

  const startLogin = async ({ user, pwd }) => {
    try {
      setMsg("");

      const response = await axios.post(
        "/auth",
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;

      setAuth({ user, pwd, accessToken });
      setMsg("Login Successful");
    } catch (err) {
      if (!err?.response) {
        setMsg("No server Response");
      } else if (err?.response?.status === 401) {
        setMsg("Unauthorized");
      } else {
        setMsg("Login Failed");
      }
    }
  };

  return {
    msg,

    startLogin,
  };
};
