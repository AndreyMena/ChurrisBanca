import { useState } from "react";
import axios from "../api/axios";

const useSocialStore = () => {
  cosnt [posts, setPosts] = useState([]);

  const startLoadingPosts = async (userName) => {
    try {
      const { data } = await axios.get(`social/posts/${userName}`);
      setPosts(data.posts);
    } catch (error) {
      console.log("Error loading posts", error);
    }
  };

  return {
    posts,
    startLoadingPosts,
  };
};

export default useSocialStore;