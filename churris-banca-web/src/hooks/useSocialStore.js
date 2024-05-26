import { useState } from "react";
import axios from "../api/axios";

const initialStateAccount = {
  Nombre: "",
  Apellidos: "",
  Email: "",
  Celular: "",
};

const useSocialStore = () => {
  const [account, setAccount] = useState(initialStateAccount);
  const [posts, setPosts] = useState([]);

  /* Profile */
  const startLoadingAccount = async (accountUsername) => {
    try {
      const { data } = await axios.get(`social/${accountUsername}`);
      setAccount(data.account);
    } catch (error) {
      console.log("Error loading bank account");
    }
  };

  const startUpdatingValueAccount = async (accountUsername, data, label) => {
    try {
      await axios.put(`social/user/${accountUsername}`, {
        data: data,
        label: label === "Cell phone number" ? "Celular" : label,
      });
    } catch {
      console.log("Error updating bank account");
    }
  };

  /* Social */
  const startLoadingPosts = async (userName) => {
    try {
      const { data } = await axios.get(`social/posts/${userName}`);
      setPosts(data.posts);
    } catch (error) {
      console.log("Error loading posts", error);
    }
  };

  return {
    account,
    posts,

    startLoadingAccount,
    startUpdatingValueAccount,
    startLoadingPosts,
  };
};

export default useSocialStore;
