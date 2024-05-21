import React from "react";
import PostContent from "../PostContent/PostContent";
import PostHeader from "../PostHeader/PostHeader";
import PostReaction from "../PostReactions/PostReactions";

import "./Post.css"

const Post = () => {

  return (
    <div id="post-container">
      <PostHeader></PostHeader>
      <PostContent></PostContent>
      <PostReaction></PostReaction>
    </div>
  );
};

export default Post;
