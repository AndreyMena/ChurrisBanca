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
  const [accounts, setAccounts] = useState([]);
  const [friendship, setFriendship] = useState([]);
  const [followedPosts, setfollowedPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [viewOnlyUserProfile, setViewOnlyUserProfile] = useState([]);

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

  const startLoadingFollowedPosts = async (userName) => {
    try {
      const { data } = await axios.get(`social/followedPosts/${userName}`);
      setfollowedPosts(data.followedPosts);
    } catch (error) {
      console.log("Error loading followed posts");
    }
  };

  const sendNewPost = async (payload, formData) => {
    try { 
      if (formData) {
        const response = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData);
        payload.imageUrl = response.data.secure_url;
      } else {
        payload.imageUrl = "";
      }

      await axios.post("social/newPost", payload);
    } catch (error) {
      console.log("Error sending new post");
    }
  };

  const sendNewLike = async (payload) => {
    try {
      await axios.put(`social/newLike`, payload);
    } catch (error) {
      console.log("Error sending new like.", error);
    }
  };

  const sendRemoveLike = async (payload) => {
    try {
      await axios.put(`social/removeLike`, payload);
    } catch (error) {
      console.log("Error removing like.", error);
    }
  };

  const sendNewDislike = async (payload) => {
    try {
      await axios.put(`social/newDislike`, payload);
    } catch (error) {
      console.log("Error sending new dislike.", error);
    }
  };

  const sendRemoveDislike = async (payload) => {
    try {
      await axios.put(`social/removeDislike`, payload);
    } catch (error) {
      console.log("Error removing dislike.", error);
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

  const checkFriendship = async (payload) => {
    try {
      const { data } = await axios.put("social/checkFriendship", payload);
      setFriendship(data.friendship);
      console.log(data.friendship);
    } catch (error) {
      console.log("Error checking friendship.");
    }
  };

  const sendNewFollow = async (payload) => {
    try {
      await axios.put(`social/newFollow`, payload);
    } catch (error) {
      console.log("Error sending new follow.");
    }
  };

  const sendRemoveFollow = async (payload) => {
    try {
      await axios.put(`social/removeFollow`, payload);
    } catch (error) {
      console.log("Error removing follow.");
    }
  };

  const getViewOnlyUserProfile = async (accountUsername) => {
    try {
      const { data } = await axios.get(`social/${accountUsername}`);
      setViewOnlyUserProfile(data.account);
    } catch (error) {
      console.log("Error loading view-only user profile");
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
    accounts,
    friendship,
    followedPosts,
    posts,
    viewOnlyUserProfile,

    setAccounts,

    startLoadingAccount,
    startUpdatingValueAccount,

    startLoadingPosts,
    startLoadingFollowedPosts,
    sendNewPost,
    sendNewLike,
    sendRemoveLike,
    sendNewDislike,
    sendRemoveDislike,
    startDeletingPost,
    checkFriendship,
    sendNewFollow,
    sendRemoveFollow,
    getViewOnlyUserProfile,

    startLoadingAccounts,
  };
};

export default useSocialStore;
