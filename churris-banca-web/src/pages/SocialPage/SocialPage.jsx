import React from "react";
import Header from "../../Components/Header/Header";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Posts from "../../Components/Posts/Posts";
import ClientServerProvider from "../../Components/Providers/ClientServerProvider";

const SocialPage = () => {
  return (
    <ClientServerProvider>
      <Header />

      <div className="container">
        <CreatePost />

        <Posts />

        <PaginationBar />
      </div>
    </ClientServerProvider>
  );
};

export default SocialPage;
