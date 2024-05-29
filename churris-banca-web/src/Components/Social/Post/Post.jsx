import React from "react";
import PostContent from "../PostContent/PostContent";
import PostHeader from "../PostHeader/PostHeader";
import PostReaction from "../PostReactions/PostReactions";

import "./Post.css"

const Post = ({postUserImage, postUser, postContent, postImage, postLikes, postDislikes}) => {
  return (
    <div id="post-container">
      <PostHeader postUserImage={postUserImage} postUser={postUser}></PostHeader>
      <PostContent postContent={postContent} postImage={postImage}></PostContent>
      <PostReaction postLikes={postLikes} postDislikes={postDislikes}></PostReaction>
    </div>
  );
};

export default Post;
