import React from "react";
import Header from "../../Components/Header/Header";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Posts from "../../Components/Posts/Posts";

const SocialPage = () => {
  return (
    <>
      <Header />

      <div className="container">
        <CreatePost />

        <Posts />

        <PaginationBar />
      </div>
    </>
  );
};

export default SocialPage;
