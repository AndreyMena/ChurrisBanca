import React, { useEffect } from "react";
import Post from "../Post/Post";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";

const PostsList = () => {
  const { startLoadingAccount, account, startLoadingPosts, posts, startLoadingFollowedPosts, followedPosts } = useSocialStore();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = () => {
      startLoadingAccount(auth.user);
      startLoadingPosts(auth.user);
      startLoadingFollowedPosts(auth.user);
    };

    fetchData();

    const intervalId = setInterval(() => {
      startLoadingPosts(auth.user);
      startLoadingFollowedPosts(auth.user);
    }, 15000);
    
    return () => clearInterval(intervalId);
  }, [auth.user]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.PostId}
          postUserImage={account.Imagen}
          postName={account.Nombre}
          postId={post.PostId}
          postUser={post.Nickname}
          postContent={post.Contenido}
          postDateTime={post.Fecha}
          postImage={post.Imagen}
          postLikes={post.Likes}
          postUsernamesLikes={post.Nicknames}
          postDislikes={post.Dislikes}
          postUsernamesDislikes={post.DislikeNicknames}
        />
      ))}
      {followedPosts.map((post) => (
        <Post
          key={post.PostId}
          postUserImage={post.UserImage}
          postName={post.Nickname}
          postId={post.PostId}
          postUser={post.Nickname}
          postContent={post.Contenido}
          postDateTime={post.Fecha}
          postImage={post.Imagen}
          postLikes={post.Likes}
          postUsernamesLikes={post.Nicknames}
          postDislikes={post.Dislikes}
          postUsernamesDislikes={post.DislikeNicknames}
        />
      ))}
    </div>
  );
};

export default PostsList;
