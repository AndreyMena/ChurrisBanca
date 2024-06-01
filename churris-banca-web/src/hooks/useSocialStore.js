import { useState } from "react";
import axios from "../api/axios";

const initialStateAccount = {
  Nombre: "",
  Apellidos: "",
  Email: "",
  Celular: "",
};

export const useSocialStore = () => {
  const [account, setAccount] = useState(initialStateAccount);
  const [posts, setPosts] = useState([]);
  const [accounts, setAccounts] = useState([]);

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
      await axios.put(`social/user`, {
        userName: accountUsername,
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

  const sendNewPost = async (userName, postText) => {
    try {
      await axios.get(`social/newPost/${userName}/${postText}`);
    } catch (error) {
      console.log("Error send new post.", error);
    }
  };

  const sendNewLike = async (userName, postId) => {
    try {
      await axios.get(`social/newLike/${userName}/${postId}`);
    } catch (error) {
      console.log("Error send new like.", error);
    }
  };

  const sendNewDislike = async (userName, postId) => {
    try {
      await axios.get(`social/newDislike/${userName}/${postId}`);
    } catch (error) {
      console.log("Error send new dislike.", error);
    }
  };

  /* Banking */
  const startLoadingAccounts = async () => {
    try {
      const { data } = await axios.get("social/");
      setAccounts(data.accounts);
    } catch (error) {
      console.log("Error loading bank account usernames");
    }
  };

  return {
    account,
    posts,
    accounts,

    setAccounts,

    startLoadingAccount,
    startUpdatingValueAccount,
    startLoadingPosts,
    startLoadingAccounts,
    sendNewPost,
    sendNewLike,
    sendNewDislike,
  };
};

export default useSocialStore;
