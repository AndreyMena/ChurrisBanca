import React from "react";
import Head from "./Head";
import Description from "./Description";
import Img from "./Img";
import Reactions from "./Reactions";
import "./Posts.css";

const Posts = () => {
  return (
    <div id="posts">
      <Head />

      <Description />

      <Img />

      <Reactions />
    </div>
  );
};

export default Posts;
