import React, { useEffect } from "react";
import Post from "../Post/Post";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";

const PostsList = () => {
  const { startLoadingAccount, account, startLoadingPosts, posts } =
    useSocialStore();
  const { auth } = useAuth();

  useEffect(() => {
    startLoadingAccount(auth.user);
    startLoadingPosts(auth.user);
    const intervalId = setInterval(startLoadingPosts, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          postUserImage={account.Imagen}
          postName={account.Nombre}
          postId={post.PostId}
          postUser={post.Nickname}
          postContent={post.Contenido}
          postDateTime={post.Fecha}
          postImage={post.Imagen}
          postLikes={post.Likes}
          postDislikes={post.Dislikes}
        ></Post>
      ))}
    </div>
  );
};

export default PostsList;
