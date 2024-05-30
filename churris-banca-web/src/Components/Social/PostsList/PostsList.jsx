import React, { useEffect } from "react";
import Post from "../Post/Post";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";

const PostsList = () => {
	const { startLoadingPosts, posts } = useSocialStore();
	const { auth } = useAuth();

	useEffect(() => {
		startLoadingPosts(auth.user);
	}, []);

	return (
		<div>
			{posts.map((post, index) => (
				<Post
				key={index}
				postUserImage="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
				postUser={post.Nickname}
				pospostDateTime={post.Fecha}
				postContent={post.Contenido}
				postImage="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
				postLikes={post.Likes}
				postDislikes={post.Dislikes}
				></Post>
			))}
		</div>
	);
};

export default PostsList;
