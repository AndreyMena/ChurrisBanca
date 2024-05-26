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

  const startLoadingAccount = async (accountUsername) => {
    try {
      const { data } = await axios.get(`social/${accountUsername}`);
      console.log(data.account);
      setAccount(data.account);
    } catch (error) {
      console.log("Error loading bank account", error);
    }
  };

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
    startLoadingPosts,
  };
};

export default useSocialStore;
