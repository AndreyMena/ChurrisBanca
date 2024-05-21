import React from "react";
import Header from "../../Components/Header/Header";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import CreatePost from "../../Components/Social/CreatePost/CreatePost";
import Post from "../../Components/Social/Post/Post";
import Posts from "../../Components/Social/Posts/Posts";
import ClientServerProvider from "../../Components/Providers/ClientServerProvider";

const SocialPage = () => {
  return (
    <ClientServerProvider>
      <Header />

      <div className="container">
        <CreatePost />

        <Post />

        <PaginationBar />
      </div>
    </ClientServerProvider>
  );
};

export default SocialPage;
