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

  /* Profile, social */
  const startLoadingAccount = async (accountUsername) => {
    try {
      const { data } = await axios.get(`social/${accountUsername}`);
      setAccount(data.account);
    } catch (error) {
      console.log("Error loading bank account");
    }
  };

  /* Profile */
  const startUpdatingValueAccount = async (accountUsername, data, label) => {
    try {
      await axios.put(`social/user`, {
        userName: accountUsername,
        data: data,
        label: label === "Cell phone number" ? "Celular" : label,
      });
    } catch (error) {
      console.log("Error updating bank account");
    }
  };

  /* Social */
  const startLoadingPosts = async (userName) => {
    try {
      const { data } = await axios.get(`social/posts/${userName}`);
      setPosts(data.posts);
    } catch (error) {
      console.log("Error loading posts");
    }
  };

  const sendNewPost = async (payload) => {
    try {
      await axios.post("social/newPost", payload);
    } catch (error) {
      console.log("Error send new post.", error);
    }
  };

  const sendNewLike = async (payload) => {
    try {
      await axios.put(`social/newLike`, payload);
    } catch (error) {
      console.log("Error send new like.", error);
    }
  };

  const sendRemoveLike = async (payload) => {
    try {
      await axios.put(`social/removeLike`, payload);
    } catch (error) {
      console.log("Error send remove like.", error);
    }
  };

  const sendRemoveDislike = async (payload) => {
    try {
      await axios.put(`social/removeDislike`, payload);
    } catch (error) {
      console.log("Error send remove dislike.", error);
    }
  };

  const sendNewDislike = async (payload) => {
    try {
      await axios.put(`social/newDislike`, payload);
    } catch (error) {
      console.log("Error send new dislike.", error);
    }
  };

  const startDeletingPost = async (payload) => {
    try {
      await axios.delete("social/post", {
        data: {
          payload: payload,
        },
      });
    } catch (error) {
      console.log("Error deleting post");
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
    sendNewPost,
    sendNewLike,
    sendRemoveLike,
    sendNewDislike,
    sendRemoveDislike,
    startDeletingPost,

    startLoadingAccounts,
  };
};

export default useSocialStore;
