import React from "react";
import PostContent from "../PostContent/PostContent";
import PostHeader from "../PostHeader/PostHeader";
import PostReaction from "../PostReactions/PostReactions";

import "./Post.css";

const Post = ({
  postUserImage,
  postUser,
  postDateTime,
  postId,
  postContent,
  postImage,
  postLikes,
  postDislikes,
}) => {
  return (
    <div id="post-container">
      <PostHeader
        postUserImage={postUserImage}
        postUser={postUser}
        postDateTime={postDateTime}
      ></PostHeader>
      <PostContent
        postContent={postContent}
        postImage={postImage}
      ></PostContent>
      <PostReaction
        postId={postId}
        postLikes={postLikes}
        postDislikes={postDislikes}
      ></PostReaction>
    </div>
  );
};

export default Post;
