import React from "react";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Posts from "../../Components/Posts/Posts";

const SocialPage = () => {
  return (
    <>
      <Header />

      <div className="container">
        <CreatePost />

        <Posts />

        <Pagination />
      </div>
    </>
  );
};

export default SocialPage;
