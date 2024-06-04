import React from "react";
import PostContent from "../PostContent/PostContent";
import PostHeader from "../PostHeader/PostHeader";
import PostReaction from "../PostReactions/PostReactions";

import "./Post.css";

const Post = ({
  postUserImage,
  postName,
  postUser,
  postDateTime,
  postId,
  postContent,
  postImage,
  postLikes,
  postUsernamesLikes,
  postDislikes,
}) => {
  return (
    <div id="post-container">
      <PostHeader
        postUserImage={postUserImage}
        postName={postName}
        postId={postId}
        postUser={postUser}
        postContent={postContent}
        postImage={postImage}
        postDateTime={postDateTime}
      ></PostHeader>
      <PostContent
        postContent={postContent}
        postImage={postImage}
      ></PostContent>
      <PostReaction
        postId={postId}
        postLikes={postLikes}
        postUsernamesLikes={postUsernamesLikes}
        postDislikes={postDislikes}
      ></PostReaction>
    </div>
  );
};

export default Post;
