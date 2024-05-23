import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useSocialStore } from "../../../hooks/useSocialStore";
import useAuth from "../../../hooks/useAuth";

const PostsList = () => {
	const { startLoadingPosts, posts } = useSocialStore();
	const { auth } = useAuth();

	useEffect(() => {
		startLoadingPosts(auth.user);
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<Post
				postUserImage={post.postUserImage}
				postUser={post.postUser}
				postContent={post.postContent}
				postImage={post.postImage}
				postLikes={post.postLikes}
				postDisikes={post.postDisikes}
				></Post>
			))}
		</div>
	);
};

export default PostsList;
